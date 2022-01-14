import data from './data.json' assert { type: 'json' };

class addComment {
	constructor(comment) {
		this.comment = comment;

		// Section Center
		this.sectionCenter = document.createElement('section');
		this.sectionCenter.classList.add('section-center');

		// Comment Container
		this.commentContainer = document.createElement('div');
		this.sectionCenter.appendChild(this.commentContainer);
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

		// Created at
		this.createdAt = document.createElement('h2');
		this.userInfo.appendChild(this.createdAt);
		this.createdAt.classList.add('created-at');
		this.createdAt.innerHTML = comment.createdAt;

		// Reply button
		this.replyButton = document.createElement('h1');
		this.user.appendChild(this.replyButton);
		this.replyButton.classList.add('reply');
		this.replyButton.innerHTML = 'Reply';

		// Comment content
		this.commentContentText = document.createElement('p');
		this.mainSection.appendChild(this.commentContentText);
		this.commentContentText.innerHTML = comment.content;

		// Bind this to all functions
		this.scoreUp = this.scoreUp.bind(this);
		this.scoreDown = this.scoreDown.bind(this);
		this.addReplies = this.addReplies.bind(this);

		// Score interactivity
		this.up.addEventListener('click', this.scoreUp);
		this.down.addEventListener('click', this.scoreDown);

		// Reply interactivity
		this.replyButton.addEventListener('click', () => {});

		this.comment.replies.forEach((reply) => this.addReplies(reply));

		document.body.appendChild(this.sectionCenter);
	}

	scoreUp() {
		this.comment.score++;
		this.currentScore.innerHTML = this.comment.score;
	}

	scoreDown() {
		this.comment.score--;
		this.currentScore.innerHTML = this.comment.score;
	}

	addReplies(reply) {
		// Reply
		this.replyContainer = document.createElement('div');
		this.sectionCenter.appendChild(this.replyContainer);
		this.replyContainer.classList.add('reply-container');

		// Score
		this.score = document.createElement('div');
		this.replyContainer.appendChild(this.score);
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
		this.replyContainer.appendChild(this.mainSection);
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
		this.userImg.src = reply.user.image.png;

		// Username
		this.username = document.createElement('h2');
		this.userInfo.appendChild(this.username);
		this.username.innerHTML = reply.user.username;

		// Created at
		this.createdAt = document.createElement('h2');
		this.userInfo.appendChild(this.createdAt);
		this.createdAt.classList.add('created-at');
		this.createdAt.innerHTML = reply.createdAt;

		// Reply button
		this.replyButton = document.createElement('h1');
		this.user.appendChild(this.replyButton);
		this.replyButton.classList.add('reply');
		this.replyButton.innerHTML = 'Reply';

		// Comment content
		this.commentContentText = document.createElement('p');
		this.mainSection.appendChild(this.commentContentText);
		this.commentContentText.innerHTML = reply.content;

		this.scoreUp = this.scoreUp.bind(reply);
		this.scoreDown = this.scoreDown.bind(reply);

		// Score interactivity
		this.up.addEventListener('click', this.scoreUp);
		this.up.addEventListener('click', () => console.log(this.score));
		this.down.addEventListener('click', this.scoreDown);
	}
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

// const add = new addComment(newComment);

data.comments.forEach((comment) => {
	new addComment(comment);
});

console.log(typeof data.comments);
