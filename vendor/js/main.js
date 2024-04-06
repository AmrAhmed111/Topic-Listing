// Change navbar color when scrollY is running
Vue.createApp({
    data() {
        return {
            view: {
                topOfPage: true
            }
        }
    },
    methods: {
        handleScroll(){
            if(window.pageYOffset > 0){
                if(this.view.topOfPage) this.view.topOfPage = false
            } else {
                if(!this.view.topOfPage) this.view.topOfPage = true
            }
        }
    },
    beforeMount() {
        window.addEventListener('scroll', this.handleScroll)
    }
}).mount("#app");

// vertical scrollable timeline
Vue.createApp({
    data() {
        return {
            timeline: [
                {
                    title: 'Search your favourite topic',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, cumque magnam? Sequi, cupiditate quibusdam alias illum sed esse ad dignissimos libero sunt, quisquam numquam aliquam? Voluptas, accusamus omnis?',
                    icon: 'bi bi-search',
                    active: false
                },
                {
                    title: 'Bookmark & keep it for yourself',
                    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint animi necessitatibus aperiam repudiandae nam omnis est vel quo, nihil repellat quia velit error modi earum similique odit labore. Doloremque, repudiandae?',
                    icon: 'bi bi-bookmark',
                    active: false
                },
                {
                    title: 'Read & Enjoy',
                    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi vero quisquam, rem assumenda similique voluptas distinctio, iste est hic eveniet debitis ut ducimus beatae id? Quam culpa deleniti officiis autem?',
                    icon: 'bi bi-book',
                    active: false
                },
            ]
        }
    },
    methods: {
        handleScroll() {
            const docViewTop = window.pageYOffset;
            const docViewBottom = docViewTop + window.innerHeight;
            const isScrollIntoView = (elem, index) => {
                const elemTop = elem.offsetTop;
                const elemBottom = elemTop + window.innerHeight * 0.6;
                if (elemBottom <= docViewBottom && elemTop >= docViewTop) {
                    elem.classList.add('active');
                } else {
                    elem.classList.remove('active');
                }
            };
            const MainTimelineContainer = document.querySelector('#vertical-scrollable-timeline');
            const MainTimelineContainerBounds = MainTimelineContainer.getBoundingClientRect();
            const MainTimelineContainerBottom = MainTimelineContainerBounds.bottom - window.innerHeight * 0.6;
            const progressBarInner = MainTimelineContainer.querySelector('.inner');
            progressBarInner.style.height = MainTimelineContainerBottom + 'px';
            Array.from(timeline).forEach(isScrollIntoView);
            const timeline = document.querySelectorAll('#vertical-scrollable-timeline li');
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    
}).mount("#vertical-scrollable-timeline");