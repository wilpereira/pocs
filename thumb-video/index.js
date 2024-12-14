const CONTENT_DATA = [
	{
		thumbnail: 'https://marketplace.canva.com/EAFNgl2fFFo/1/0/800w/canva-miniatura-youtube-v%C3%ADdeo-curioso-gr%C3%A1tis-c_Cbpg8_qWs.jpg',
		name: 'João da Silva',
		location: 'São Paulo',
		value: 'R$1.068.200,00',
		testimony: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lobortis sem non dui porta, fringilla semper erat posuere. Morbi in ante imperdiet, maximus nisi imperdiet, pellentesque lorem. In eget ultricies lectus. Donec consequat eu elit vel commodo. Praesent semper efficitur justo, in ullamcorper purus ultricies at. Quisque consequat libero eu.',
		urlVideo: 'https://cdn.pixabay.com/video/2020/08/12/46989-449623829_tiny.mp4'
	},
	{
		thumbnail: 'https://marketplace.canva.com/EAE76W07qmY/1/0/1600w/canva-miniatura-para-youtube---capa-de-v%C3%ADdeo-para-canal-sR8kUqk2n18.jpg',
		name: 'Maria da Silva',
		location: 'Paraná',
		value: 'R$1.212.400,00',
		testimony: 'Pellentesque ut rhoncus dui, at ultrices leo. Pellentesque est enim, ullamcorper in mi sed, commodo suscipit justo. Curabitur vitae metus metus. Aliquam in fermentum nulla. Class aptent taciti sociosqu ad litora',
		urlVideo: 'https://cdn.pixabay.com/video/2022/10/16/135160-761273559_large.mp4'
	},
	{
		thumbnail: 'https://marketplace.canva.com/EAFNgl2fFFo/1/0/800w/canva-miniatura-youtube-v%C3%ADdeo-curioso-gr%C3%A1tis-c_Cbpg8_qWs.jpg',
		name: 'Claudio Fernando',
		location: 'Roraima',
		value: 'R$1.645.112,00',
		testimony: 'Ut mattis, neque vitae laoreet aliquet, sem quam dapibus dolor, sit amet commodo ante neque ut urna. Vivamus scelerisque blandit magna aliquam dignissim. Nam interdum felis eu quam pretium cursus. Mauris porta erat sit amet ex eleifend semper sed nec dui. Integer pretium sed orci sit amet facilisis.',
		urlVideo: 'https://cdn.pixabay.com/video/2023/06/25/168811-839864556_tiny.mp4'
	},
	{
		thumbnail: 'https://marketplace.canva.com/EAE76W07qmY/1/0/1600w/canva-miniatura-para-youtube---capa-de-v%C3%ADdeo-para-canal-sR8kUqk2n18.jpg',
		name: 'Luiz Augusto',
		location: 'Espírito Santo',
		value: 'R$1.989.421,00',
		testimony: 'Ut cursus suscipit velit, nec porta est porttitor feugiat. Pellentesque in sapien quis orci blandit vehicula. Maecenas auctor neque et risus dapibus gravida sit amet at tellus. Ut gravida, lorem sit amet lacinia gravida, mauris nisl volutpat turpis, in tempor risus lacus id tellus. Nulla facilisi. Ut blandit pharetra iaculis.',
		urlVideo: 'https://cdn.pixabay.com/video/2019/02/01/21116-315137080_tiny.mp4'
	},
	{
		thumbnail: 'https://images.pexels.com/photos/3183198/pexels-photo-3183198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		name: 'Ana Rosa',
		location: 'Pernambuco',
		value: 'R$1.189.131,00',
		testimony: 'Pellentesque in sapien quis orci blandit vehicula. Maecenas auctor neque et risus dapibus gravida sit amet at tellus. Ut gravida, lorem sit amet lacinia gravida, mauris nisl volutpat turpis, in tempor risus lacus id tellus. Nulla facilisi. Ut blandit pharetra iaculis.',
		urlVideo: 'https://cdn.pixabay.com/video/2023/09/24/182082-867762198_large.mp4'
	}
]



function loadVideo(urlVideo) {
	const player = `<video autoplay controlslist="nodownload noplaybackrate noremoteplayback nopictureInPicture" controls><source src="${urlVideo}" type="video/mp4"></video>`
	const videoContainer = document.querySelector(".CAP13__watch--player")

	videoContainer.innerHTML = player
}

function onThumbnails() {
	return CONTENT_DATA.map(el => {
		return `
        <li>
            <img class="CAP13__thumbnail--image" src="${el.thumbnail}" alt="">

            <div class="CAP13__thumbnail__content">
                <div class="list-thumbs__content--inner">
                    <span>
                        <img src="https://www.santander.com.br/hotsite/credito-financiamento-imobiliario/assets/img/ic_account_user.svg" alt="">
                        ${el.name}
                    </span>
                    <span>
                        <img src="https://www.santander.com.br/hotsite/credito-financiamento-imobiliario/assets/img/ic_bank_credit_red.svg" alt="">
                        ${el.location}
                    </span>
                </div>

                <div class="list-thumbs__content--inner">
                    <small>Prêmio</small>
                    <strong>${el.value}</strong>
                    <button class="list-thumbs--button">Ver história</button>
                </div>
            </div>
        </li>
    `}).join('')
}

function storieWinner(element) {
	return `
        <div class="CAP13__storie__motivation--item">
            <span>
                <img src="https://www.santander.com.br/hotsite/credito-financiamento-imobiliario/assets/img/ic_account_user.svg" alt="">
                ${element.name}
            </span>
            <span>
                <img src="https://www.santander.com.br/hotsite/credito-financiamento-imobiliario/assets/img/ic_bank_credit_red.svg" alt="">
                ${element.location}
            </span>

            <h4>
                <small>Prêmio</small>
                ${element.value}
            </h4>
        </div>

        <div class="CAP13__storie__motivation--item">
            <p>${element.testimony}</p>
        </div>
    `
}

function appendInfo() {
	const button = document.querySelectorAll('.list-thumbs--button')

	button.forEach((thumb, index) => {
		thumb.onclick = () => {
			const DATA_INFO = {
				name: CONTENT_DATA[index].name,
				location: CONTENT_DATA[index].location,
				value: CONTENT_DATA[index].value,
				testimony: CONTENT_DATA[index].testimony,
				video: CONTENT_DATA[index].urlVideo
			}

			const elementDiv = document.querySelector('.CAP13__storie__motivation')
			elementDiv.innerHTML = storieWinner(DATA_INFO)

			loadVideo(DATA_INFO.video)
			progressBarStorie()
		}
	})
}

function progressBarStorie() {
	const video = document.querySelector('video')

	video.addEventListener('timeupdate', () => {
		const currentTime = video.currentTime
		const durationVideo = video.duration
		const progress = (currentTime / durationVideo) * 100
		const step = document.querySelector(".CAP13__step--item > div")

		step.style.width = progress + '%'
	})
}

function onLoadFirstWinner() {
	const firstElement = CONTENT_DATA[0]
	const elementDiv = document.querySelector('.CAP13__storie__motivation')

	elementDiv.innerHTML = storieWinner(firstElement)
}

function onloadFirstVideo() {
	const firstVideo = CONTENT_DATA[0].urlVideo

	loadVideo(firstVideo)

	const video = document.querySelector('video')
	video.addEventListener('timeupdate', () => {
		const currentTime = video.currentTime
		const durationVideo = video.duration
		const progress = (currentTime / durationVideo) * 100
		const step = document.querySelector(".CAP13__step--item > div")

		step.style.width = progress + '%'
	})
}

function injectThumb() {
	const thumbnail = document.querySelector(".CAP13__thumbnail")

	thumbnail.insertAdjacentHTML('afterbegin', onThumbnails())
}

function createItemsProgressBar() {
	const lengthItem = CONTENT_DATA
	const selector = document.querySelector('.CAP13__step')

	const elements = lengthItem.map(() => {
		return `<div class="CAP13__step--item"><div></div></div>`
	}).join('')

	selector.innerHTML = elements
}

function updateProgressBar(videoElement, progressBarElement) {
	const duration = videoElement.duration;
	const currentTime = videoElement.currentTime;
	const progressPercentage = (currentTime / duration) * 100;

	progressBarElement.style.width = progressPercentage + '%';
}

function createProgressBar() {
	const progressBarElement = document.querySelector('.CAP13__step--item div');
	const thumbnails = document.querySelectorAll('.list-thumbs--button')

	thumbnails.forEach((thumbnail, index) => {
		thumbnail.addEventListener('click', () => {
			const progressBar = progressBarElement.children[index];
			const video = document.querySelector('.CAP13__watch--player');

			video.addEventListener('timeupdate', () => {
				updateProgressBar(video, progressBar);
			});
		});
	});
}

onloadFirstVideo()
injectThumb()
appendInfo()
onLoadFirstWinner()
createItemsProgressBar()
createProgressBar()