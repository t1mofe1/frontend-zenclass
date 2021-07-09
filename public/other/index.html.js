(async () => {
	const lessons = await axios.get('/api/lessons/').then((res) => res.data);

	const wrapper = document.querySelector('.cards-wrapper');

	class Lesson {
		constructor(num, github, state) {
			this.num = num;
			this.github = github;
			this.state = state;
		}

		generateHtml() {
			const card = document.createElement('div');
			card.classList.add('lesson-card', this.state === '0' ? 'red' : this.state === '1' ? 'yellow' : 'green');

			const num = document.createElement('span');
			num.textContent = this.num;

			if (this.state === '2') {
				const btns = document.createElement('div');
				btns.classList.add('lesson-card-btns');

				const githubBtn = document.createElement('button');
				githubBtn.textContent = 'GitHub';
				githubBtn.addEventListener('click', () => {
					window.location.href = this.github;
				});

				const demoBtn = document.createElement('button');
				demoBtn.textContent = 'Demo';
				demoBtn.addEventListener('click', () => {
					window.location.href = `/${this.num}`;
				});

				btns.appendChild(githubBtn);
				btns.appendChild(demoBtn);

				card.appendChild(btns);
			}

			card.appendChild(num);

			return card;
		}
	}

	Object.entries(lessons).forEach(([num, { github, state }]) => {
		const obj = new Lesson(num, github, state);
		wrapper.appendChild(obj.generateHtml());
	});
})();
