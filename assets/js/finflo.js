document.addEventListener('DOMContentLoaded', function() {
    const insightsContainer = document.getElementById('finflo-insights-container');
    const articleTopicMeta = document.querySelector('meta[name="article-topic"]');
    let currentPageTopic = 'general'; // Default topic if not found

    if (articleTopicMeta) {
        currentPageTopic = articleTopicMeta.getAttribute('content').toLowerCase();
    }

    // Function to fetch insights from insights.json
    async function fetchInsights() {
        try {
            // Inside the fetchInsights function
            const response = await fetch('../assets/data/insights.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const insights = await response.json();
            return insights;
        } catch (error) {
            console.error("Could not fetch insights:", error);
            insightsContainer.innerHTML = '<p>Sorry, we could not load insights at this time.</p>';
            return []; // Return empty array on error
        }
    }

    // Function to display insights based on the current page topic
    function displayInsights(insights) {
        if (!insightsContainer) {
            console.error("FinFlo insights container not found!");
            return;
        }

        insightsContainer.innerHTML = ''; // Clear any loading messages

        const relevantInsights = insights.filter(insight =>
            insight.topic.toLowerCase() === currentPageTopic
        );

        if (relevantInsights.length === 0) {
            insightsContainer.innerHTML = '<p>No specific insights for this topic right now. Explore more on Financial IQ!</p>';
            // Optionally, display some general insights or a default message
            // For MVP, we can keep it simple.
            return;
        }

        relevantInsights.forEach(insight => {
            const card = document.createElement('div');
            card.classList.add('finflo-insight-card');
            card.setAttribute('data-id', insight.id);
            card.setAttribute('role', 'button'); // For accessibility
            card.setAttribute('tabindex', '0'); // Make it focusable

            const nudgeElement = document.createElement('p');
            nudgeElement.classList.add('nudge');
            nudgeElement.textContent = insight.nudge;

            const detailElement = document.createElement('div');
            detailElement.classList.add('detail');
            detailElement.textContent = insight.detail;

            card.appendChild(nudgeElement);
            card.appendChild(detailElement);

            // Event listener for expanding/collapsing the insight
            card.addEventListener('click', () => {
                card.classList.toggle('expanded');
            });
            // Allow keyboard interaction (Enter/Space) for accessibility
            card.addEventListener('keydown', (event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                    card.classList.toggle('expanded');
                    event.preventDefault(); // Prevent scrolling if space is pressed
                }
            });

            insightsContainer.appendChild(card);
        });
    }

    // Initialize FinFlo
    async function initFinFlo() {
        const insights = await fetchInsights();
        if (insights.length > 0) {
            displayInsights(insights);
        }
    }

    initFinFlo();
});