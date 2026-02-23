// Skills data
const skills = [
    {
        name: 'amazon-product-research',
        repo: 'global-ecom-skills',
        description: 'Find winning products on Amazon with data-driven analysis',
        installs: 12500,
        tags: ['research', 'amazon', 'fba']
    },
    {
        name: 'temu-listing-optimizer',
        repo: 'global-ecom-skills',
        description: 'Optimize Temu listings for maximum visibility and sales',
        installs: 9800,
        tags: ['optimization', 'temu', 'listing']
    },
    {
        name: 'alibaba-supplier-finder',
        repo: 'global-ecom-skills',
        description: 'Find reliable suppliers on 1688/Alibaba',
        installs: 8700,
        tags: ['research', 'sourcing', '1688']
    },
    {
        name: 'cross-border-arbitrage',
        repo: 'global-ecom-skills',
        description: 'Find profitable arbitrage opportunities between platforms',
        installs: 7200,
        tags: ['research', 'arbitrage', 'profit']
    },
    {
        name: 'product-trend-analyzer',
        repo: 'global-ecom-skills',
        description: 'Analyze product trends and predict market demand',
        installs: 6500,
        tags: ['research', 'trends', 'analysis']
    }
];

// Format install numbers
function formatInstalls(num) {
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
}

// Render skills list
function renderSkills(filteredSkills) {
    const container = document.getElementById('skills-list');
    container.innerHTML = filteredSkills.map((skill, index) => `
        <a href="https://github.com/global-ecom-skills/global-ecom-skills/tree/main/skills/${skill.name}" 
           class="skill-row" target="_blank">
            <span class="col-rank">${index + 1}</span>
            <div class="col-skill">
                <span class="skill-name">${skill.name}</span>
                <span class="skill-repo">${skill.repo}</span>
            </div>
            <span class="col-installs">${formatInstalls(skill.installs)}</span>
        </a>
    `).join('');
}

// Filter skills by tab
function filterByTab(tab) {
    if (tab === 'all') return skills;
    return skills.filter(s => s.tags.includes(tab));
}

// Search skills
function searchSkills(query) {
    const q = query.toLowerCase();
    return skills.filter(s => 
        s.name.toLowerCase().includes(q) || 
        s.description.toLowerCase().includes(q) ||
        s.tags.some(t => t.includes(q))
    );
}

// Tab click handler
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const filtered = filterByTab(tab.dataset.tab);
        renderSkills(filtered);
    });
});

// Search handler
const searchInput = document.getElementById('search-input');
searchInput.addEventListener('input', (e) => {
    const results = searchSkills(e.target.value);
    renderSkills(results);
});

// Keyboard shortcut for search
document.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement !== searchInput) {
        e.preventDefault();
        searchInput.focus();
    }
});

// Copy command
function copyCommand() {
    navigator.clipboard.writeText('npx skillsadd global-ecom-skills/<skill-name>');
    const btn = document.querySelector('.copy-btn');
    btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>';
    setTimeout(() => {
        btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>';
    }, 2000);
}

// Initial render
renderSkills(skills);

// Duplicate agents for infinite scroll
const agentsScroll = document.querySelector('.agents-scroll');
if (agentsScroll) {
    agentsScroll.innerHTML += agentsScroll.innerHTML;
}
