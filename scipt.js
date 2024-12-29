document.getElementById('fetch-data').addEventListener('click', async () => {
    const timeframe = document.getElementById('timeframe').value;
    const nightscoutDataElement = document.getElementById('nightscout-data');
    const aiInsightsElement = document.getElementById('ai-insights');

    nightscoutDataElement.textContent = 'Fetching Nightscout data...';
    aiInsightsElement.textContent = 'Analyzing with OpenAI...';

    try {
        const response = await fetch(`/api/insights?timeframe=${timeframe}`);
        const data = await response.json();

        // Display Nightscout data
        nightscoutDataElement.innerHTML = `<h2>Nightscout Data</h2><pre>${JSON.stringify(data.nightscoutData, null, 2)}</pre>`;

        // Display AI insights
        aiInsightsElement.innerHTML = `<h2>AI Insights</h2><p>${data.insights}</p>`;
    } catch (error) {
        nightscoutDataElement.textContent = 'Error fetching Nightscout data.';
        aiInsightsElement.textContent = 'Error analyzing data with OpenAI.';
    }
});
