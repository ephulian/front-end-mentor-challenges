import data from './data.json' assert { type: 'json' };

function logThis() {
	console.log(this);
}

class addComment {
	constructor(comment, type) {
		this.comment = comment;

		// Section Center
		this.sectionCenter = document.createElement('section');
		this.sectionCenter.classList.add('section-center');

		// Comment | Reply
		switch (type) {
			case 'comment':
				// Comment Container
				this.commentContainer = document.createElement('div');
				this.sectionCenter.appendChild(this.commentContainer);
				this.commentContainer.classList.add('comment-container');

				// Score
				this.score = document.createElement('div');
				this.commentContainer.appendChild(this.score);
				this.score.classList.add('score');
				break;
			case 'reply':
				// Reply
				this.replyContainer = document.createElement('div');
				this.sectionCenter.appendChild(this.replyContainer);
				this.replyContainer.classList.add('reply-container');

				// Score
				this.score = document.createElement('div');
				this.replyContainer.appendChild(this.score);
				this.score.classList.add('score');
		}

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

		// Main Section
		switch (type) {
			case 'comment':
				this.mainSection = document.createElement('div');
				this.commentContainer.appendChild(this.mainSection);
				this.mainSection.classList.add('main-section');
				break;
			case 'reply':
				this.mainSection = document.createElement('div');
				this.replyContainer.appendChild(this.mainSection);
				this.mainSection.classList.add('main-section');
				break;
		}

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
		this.addReply = this.addReply.bind(this);
		this.pushReply = this.pushReply.bind(this);

		// Score interactivity
		this.up.addEventListener('click', this.scoreUp);
		this.down.addEventListener('click', this.scoreDown);

		// Reply interactivity
		this.replyButton.addEventListener('click', () => {
			console.log(this.comment.replies);
			this.addReply();
		});

		// this.comment.replies.forEach((reply) => this.addReplies(reply));

		document.body.appendChild(this.sectionCenter);
		// this.addReply();
	}

	scoreUp() {
		this.comment.score++;
		this.currentScore.innerHTML = this.comment.score;
	}

	scoreDown() {
		this.comment.score--;
		this.currentScore.innerHTML = this.comment.score;
	}

	pushReply(location, value) {
		location.replies.push(value);
	}

	addReply() {
		// New reply text input
		this.newReplyTextInput = document.createElement('div');
		this.newReplyTextInput.classList.add('new-reply-text-input');
		this.newReplyTextInput.classList.add('reply-container');

		// Reply text input image container
		this.newReplyImgContainer = document.createElement('div');
		this.newReplyImgContainer.classList.add('new-reply-text-img-container');
		this.newReplyTextInput.appendChild(this.newReplyImgContainer);

		// Reply user image
		this.newReplyUserImage = document.createElement('img');
		this.newReplyUserImage.classList.add('reply-user-img');
		this.newReplyUserImage.src = data.currentUser.image.png;
		this.newReplyImgContainer.appendChild(this.newReplyUserImage);

		// Reply textarea container
		this.newReplyTextAreaContainer = document.createElement('div');
		this.newReplyTextAreaContainer.classList.add('new-reply-text-area');
		this.newReplyTextInput.appendChild(this.newReplyTextAreaContainer);

		// Reply text area
		this.newReplyTextArea = document.createElement('textarea');
		this.newReplyTextArea.setAttribute('rows', '5');
		this.newReplyTextArea.classList.add('comment-text-area');
		this.newReplyTextArea.innerHTML = `@${this.comment.user.username}`;
		this.newReplyTextAreaContainer.appendChild(this.newReplyTextArea);

		// Reply send button
		this.newReplySendButton = document.createElement('h1');
		this.newReplySendButton.classList.add('send-reply-button');
		this.newReplySendButton.innerHTML = 'REPLY';
		this.newReplyTextAreaContainer.appendChild(this.newReplySendButton);

		this.sectionCenter.appendChild(this.newReplyTextInput);

		this.newReplySendButton.addEventListener('click', () => {
			const replyText = this.newReplyTextArea.value;
			const fullReply = {
				id: data.comments.length + 1,
				content: replyText,
				createdAt: 'Now',
				score: 0,
				user: data.currentUser,
				replies: [],
			};
			if (fullReply.content) {
				this.comment.replies.push(fullReply);
				this.sectionCenter.removeChild(this.newReplyTextInput);
			} else {
				this.newReplyTextArea.style.border = '2px solid red';
				this.newReplyTextArea.setAttribute(
					'placeholder',
					'Please enter a reply!'
				);
				// throw new Error('nothing in there');
			}
		});
	}
}

let allReplies = [];

data.comments.forEach((comment) => {
	new addComment(comment, 'comment');
	comment.replies.forEach((reply) => {
		allReplies.push(new addComment(reply, 'reply'));
		// new addComment(reply, 'reply');
	});
});

console.log(allReplies);

// data.comments.forEach((comment) => {
// 	new addComment(comment, 'comment');
// 	comment.replies.forEach((reply) => {
// 		new addComment(reply, 'reply');
// 	});
// });

document.addEventListener('click', () => {
	console.log(currentReply);
});
