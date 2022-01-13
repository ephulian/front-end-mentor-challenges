import data from './data.json' assert { type: 'json' };

class addComment {
	constructor(comment) {
		this.comment = comment;

		// Comment Container
		this.commentContainer = document.createElement('div');
		this.commentContainer.classList.add('comment-container');

		// Score
		this.score = document.createElement('div');
		this.commentContainer.appendChild(this.score);
		this.score.classList.add('score');

		// Score button up
		this.scoreBtnContainer = document.createElement('div');
		this.score.appendChild(this.scoreBtnContainer);
		this.scoreBtnContainer.classList.add('score-btn-container');

		this.up = document.createElement('h1');
		this.scoreBtnContainer.appendChild(this.up);
		this.up.classList.add('up');
		this.up.innerHTML = '+';

		// Current score
		this.currentScore = document.createElement('h1');
		this.score.appendChild(this.currentScore);
		this.currentScore.classList.add('current-score');
		this.currentScore.innerHTML = this.comment.score;

		// Score button down
		this.scoreBtnContainer = document.createElement('div');
		this.score.appendChild(this.scoreBtnContainer);
		this.scoreBtnContainer.classList.add('score-btn-container');

		this.down = document.createElement('h1');
		this.scoreBtnContainer.appendChild(this.down);
		this.down.classList.add('down');
		this.down.innerHTML = '-';

		// Main section
		this.mainSection = document.createElement('div');
		this.commentContainer.appendChild(this.mainSection);
		this.mainSection.classList.add('main-section');

		// User
		this.user = document.createElement('div');
		this.mainSection.appendChild(this.user);
		this.user.classList.add('user');

		// User Info
		this.userInfo = document.createElement('div');
		this.user.appendChild(this.userInfo);
		this.userInfo.classList.add('user-info');

		// User Image container
		this.userImgContainer = document.createElement('div');
		this.userInfo.appendChild(this.userImgContainer);
		this.userImgContainer.classList.add('user-img-container');

		// User Image
		this.userImg = document.createElement('img');
		this.userImgContainer.appendChild(this.userImg);
		this.userImg.classList.add('user-img');
		this.userImg.src = comment.user.image.png;

		// Username
		this.username = document.createElement('h2');
		this.userInfo.appendChild(this.username);
		this.username.innerHTML = this.comment.user.username;

		// this.

		document.body.appendChild(this.commentContainer);
	}

	// const score = commentContainer.createElement('div').classList.add('score');
	// commentContainer.appendChild(score);
	// const scoreBtnContainer = score
	// 	.createElement('div')
	// 	.classList.add('score-btn-container');
	// score.appendChild(scoreBtnContainer);
	// const up = scoreBtnContainer.createElement('div').classList.add('up');
	// scoreBtnContainer.appendChild(up);
	// up.innerHTML = '+================';
}

const newComment = {
	id: 5,
	content: 'fsadfagegaeafaewarawra',
	createdAt: '4 days ago',
	score: 2,
	replyingTo: 'ramsesmiron',
	user: {
		image: {
			png: './images/avatars/image-juliusomo.png',
			webp: './images/avatars/image-juliusomo.webp',
		},
		username: 'juliusomo',
	},
};

class NewComment {
	constructor(existingComments, commentContent, user) {
		this.id = existingComments.length;
		this.content = commentContent;
		this.createdAt = '';
		this.score = 0;
		this.user = user;
	}

	scoreUp() {
		score++;
	}

	scoreDown() {
		score--;
	}
}

const add = new addComment(newComment);

data.comments.forEach((comment) => {
	new addComment(comment);
});

console.log(typeof data.comments);
