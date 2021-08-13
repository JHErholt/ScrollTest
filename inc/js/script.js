// Fetch json
const siteContentJson = '/inc/json/siteContent.json'
const siteContentJsonFetch = fetch(siteContentJson)
const newsJson = '/inc/json/news.json'
const newsJsonFetch = fetch(newsJson)

// Collecting id's
const head = document.getElementById('head');
const titleContainer = document.getElementById('titleContainer');
const logoContainer = document.getElementById('logoContainer');
const navWrapper = document.getElementById('navWrapper');
const mainContainer = document.getElementById('mainContainer');

// Creating the dynamic sections

setTimeout(function () {
    const fullHeight = window.innerHeight;

    const getHeaderID = document.getElementById('header')
    const getHeaderHeight = getHeaderID.offsetHeight


    // Creating welcome
    // var createWelcome = document.createElement('div')
    // createWelcome.style.height = fullHeight - getHeaderHeight + 'px'
    // createWelcome.className = 'welcomeWrapper'
    // createWelcome.id = 'welcomeWrapper'
    // mainContainer.appendChild(createWelcome)

    // Creating home
    var createHome = document.createElement('div')
    createHome.style.minHeight = fullHeight - getHeaderHeight + 'px'
    createHome.className = 'homeWrapper'
    createHome.id = 'homeWrapper'
    mainContainer.appendChild(createHome)

    var createHomeAnchor = document.createElement('a')
    createHomeAnchor.className = 'anchor'
    createHomeAnchor.id = 'home'
    createHome.appendChild(createHomeAnchor)

    // Creating news
    var createNews = document.createElement('div')
    createNews.style.minHeight = fullHeight + 1 + 'px'
    createNews.className = 'newsWrapper'
    createNews.id = 'newsWrapper'
    mainContainer.appendChild(createNews)

    var createNewsAnchor = document.createElement('a')
    createNewsAnchor.className = 'anchor'
    createNewsAnchor.id = 'news'
    createNews.appendChild(createNewsAnchor)

    // Creating about
    var createAbout = document.createElement('div')
    createAbout.style.minHeight = fullHeight + 1 + 'px'
    createAbout.className = 'aboutWrapper'
    createAbout.id = 'aboutWrapper'
    mainContainer.appendChild(createAbout)

    var createAboutAnchor = document.createElement('a')
    createAboutAnchor.className = 'anchor'
    createAboutAnchor.id = 'about'
    createAbout.appendChild(createAboutAnchor)

    // Creating contact
    var createContact = document.createElement('div')
    createContact.style.minHeight = fullHeight + 1 + 'px'
    createContact.className = 'contactWrapper'
    createContact.id = 'contactWrapper'
    mainContainer.appendChild(createContact)


    var createContactAnchor = document.createElement('a')
    createContactAnchor.className = 'anchor'
    createContactAnchor.id = 'contact'
    createContact.appendChild(createContactAnchor)
}, 10)


// Creating site
siteContentJsonFetch
    .then(res => res.json())
    .then(data => {
        for (let i = 0; i < data['siteContent'].length; i++) {
            // The head //

            // Creating the title
            var title = document.createElement('title');
            title.innerHTML = data['siteContent'][0]['prepare']['title'] + ' | Welcome';

            head.appendChild(title);

            // Appending the stylesheet
            let styles = document.createElement('link');
            styles.rel = 'stylesheet'
            styles.href = '/inc/css/style.css'
            head.appendChild(styles)

            // Header //

            // Creating the navbar
            for (let i = 0; i < data['siteContent'][0]['header']['nav'].length; i++) {

                var listItem = document.createElement('li');
                listItem.className = 'hoverable'
                listItem.id = data['siteContent'][0]['header']['nav'][i]['navItem']['id'] + 'Li'
                let navItem = document.createElement('a');
                navItem.innerHTML = data['siteContent'][0]['header']['nav'][i]['navItem']['innerHTML'];
                navItem.id = data['siteContent'][0]['header']['nav'][i]['navItem']['id'] + 'Nav'
                navItem.href = data['siteContent'][0]['header']['nav'][i]['navItem']['url'];
                listItem.appendChild(navItem)
                navWrapper.appendChild(listItem)
            }
            // Create logo container || if logo is not here create title
            if (data['siteContent'][0]['header']['logo']['src1'] == '' || undefined) {
                logoContainer.remove();

                var titleLink = document.createElement('a')
                titleLink.href = data['siteContent'][0]['prepare']['standardUrl']
                titleLink.innerHTML = data['siteContent'][0]['prepare']['title'] + ' | Home';
                titleLink.className = 'hoverable';

                titleContainer.appendChild(titleLink)
            } else {
                titleContainer.remove();

                let logoLink = document.createElement('a')
                logoLink.href = data['siteContent'][0]['prepare']['standardUrl']
                var logo = document.createElement('img')
                logo.src = data['siteContent'][0]['header']['logo']['src1']

                logoLink.appendChild(logo)
                logoContainer.appendChild(logoLink)
            }

            setTimeout(function() {

                // Making the home container
                let getHomeWrapper = document.getElementById('homeWrapper')
                
                let homeTitle = document.createElement('h1')
                homeTitle.innerHTML = 'test'
                homeTitle.className = 'title'
                
                getHomeWrapper.appendChild(homeTitle)
                
                
                // Making the contact container
                let getContactWrapper = document.getElementById('contactWrapper')
                
                let contactContainer = document.createElement('div')
                contactContainer.className = 'contactContainer'
                contactContainer.id = 'contactContainer'
                
                let textContainer = document.createElement('div')
                textContainer.className = 'textContainer'
                textContainer.id = 'textContainer'
                
                let mapContainer = document.createElement('div')
                mapContainer.className = 'mapContainer'
                mapContainer.id = 'mapContainer'

                let googleMaps = document.createElement('iframe')
                googleMaps.className = 'googleMaps'
                googleMaps.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6165.0559945148025!2d12.024355710177632!3d55.8502151566515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46526faa74650263%3A0xa874c9690e85d53!2sTarzan%20Skr%C3%A6nten!5e1!3m2!1sen!2sdk!4v1628838013568!5m2!1sen!2sdk'
                googleMaps.width = '600'
                googleMaps.height = '450'
                googleMaps.style = 'border:0;'
                googleMaps.allowFullscreen = ''
                googleMaps.loading = 'lazy'
                
                mapContainer.appendChild(googleMaps)

                contactContainer.appendChild(textContainer)
                contactContainer.appendChild(mapContainer)
                getContactWrapper.appendChild(contactContainer)
                
                
            }, 11)
                // Making the news container
                newsJsonFetch
                .then(res => res.json())
                .then(data => {
                    for (let i = 0; i < data['news'].length; i++) {
                        setTimeout(function () {
                            // getting the 'newsWrapper'
                            let getNewsWrapper = document.getElementById('newsWrapper')

                            // Creating the news items

                            let rightIdNumber = i + 1

                            let newsItem = document.createElement('div')
                            newsItem.className = 'newsItems'
                            newsItem.id = 'newsCount' + rightIdNumber;

                            let newsPfp = document.createElement('img')
                            newsPfp.src = data['news'][i]['profilePfp']
                            newsPfp.className = 'newsPfp'

                            let newsWriter = document.createElement('h2')
                            newsWriter.innerHTML = data['news'][i]['writer']
                            newsWriter.className = 'newsWriter hoverable'

                            let newsDate = document.createElement('h3')
                            newsDate.innerHTML = data['news'][i]['time']
                            newsDate.className = 'newsDate'

                            let newsText = document.createElement('p')
                            newsText.innerHTML = data['news'][i]['message']
                            newsText.className = 'newsText'

                            newsDataWrapper = document.createElement('div')
                            newsDataWrapper.className = 'newsMeta'

                            newsData = document.createElement('div')
                            newsData.className = 'newsData'

                            let newsBreak = document.createElement('div')
                            newsBreak.className = 'break'

                            newsData.appendChild(newsWriter)
                            newsData.appendChild(newsBreak)
                            newsData.appendChild(newsDate)

                            newsDataWrapper.appendChild(newsPfp)
                            newsDataWrapper.appendChild(newsData)

                            newsItem.appendChild(newsDataWrapper)
                            newsItem.appendChild(newsText)


                            if (i > 2) {
                                newsItem.classList.add('hidden', "allNews")
                            }
                            if (i == 2) {
                                setTimeout(function () {
                                    news.className = 'enough'

                                    var newsAllContainer = document.createElement('div')
                                    newsAllContainer.className = 'newsAllContainer'
                                    let newsAll = document.createElement('a')
                                    newsAll.innerHTML = 'All news'
                                    newsAll.className = 'newsLink'
                                    newsAll.href = '#new'
                                    newsAll.addEventListener('click', () => {
                                        news.classList.add('allOpen')

                                        let getHomeWrapper = document.getElementById('homeWrapper')
                                        let getAboutWrapper = document.getElementById('aboutWrapper')
                                        let getContactWrapper = document.getElementById('contactWrapper')
                                        getHomeWrapper.classList.add('hidden');
                                        getAboutWrapper.classList.add('hidden');
                                        getContactWrapper.classList.add('hidden');
                                        
                                        
                                        let getNewsNav = document.getElementById('newsNav')
                                        getNewsNav.href = '#new'

                                        let getNewsItems = document.getElementsByClassName('newsItems')
                                        for (let i = 0; i < getNewsItems.length; i++) {
                                            setTimeout(function () {
                                                getNewsItems[i].classList.add('newsItemsAll')
                                            }, 1)
                                        }

                                        let getNewsAllItems = document.getElementsByClassName('allNews')
                                        for (let i = 0; i < getNewsAllItems.length; i++) {
                                            setTimeout(function () {
                                                getNewsAllItems[i].classList.remove('hidden')
                                            }, 1)
                                        }


                                        let newsBack = document.createElement('a')
                                        newsBack.innerHTML = 'Back'
                                        newsBack.className = 'newsLink'
                                        newsBack.href = '#news'
                                        console.log('newsBack')
                                        newsBack.addEventListener('click', () => {
                                            news.classList.remove('allOpen')

                                            let getHomeWrapper = document.getElementById('homeWrapper')
                                            let getAboutWrapper = document.getElementById('aboutWrapper')
                                            let getContactWrapper = document.getElementById('contactWrapper')
                                            getHomeWrapper.classList.remove('hidden');
                                            getAboutWrapper.classList.remove('hidden');
                                            getContactWrapper.classList.remove('hidden');

                                            let getNewsNav = document.getElementById('newsNav')
                                            getNewsNav.href = '#news'

                                            for (let i = 0; i < getNewsAllItems.length; i++) {
                                                setTimeout(function () {
                                                    getNewsAllItems[i].classList.add('hidden')
                                                }, 1)
                                            }



                                            newsAllContainer.removeChild(newsBack)
                                            newsAllContainer.appendChild(newsAll)
                                        })

                                        newsAllContainer.appendChild(newsBack)
                                        newsAllContainer.removeChild(newsAll)
                                    })

                                    newsAllContainer.appendChild(newsAll)
                                    getNewsWrapper.appendChild(newsAllContainer)
                                }, 1)
                            }
                            if (i == data['news'].length - 1) {
                                newsItem.classList.add('testt')
                            }
                            if (news.classList.contains('enough')) {
                                getNewsWrapper.parentNode.insertBefore(newsItem, newsAllContainer)
                            } else {
                                getNewsWrapper.appendChild(newsItem)
                            }
                        }, 10)

                    }
                })

            // Scroll on scroll
            setTimeout(function () {
                // Getting heights
                const getHeaderID = document.getElementById('header')
                const getHeaderHeight = getHeaderID.offsetHeight / 2
                const getHome = document.getElementById('homeWrapper')
                const getHomeHeight = getHome.offsetHeight + getHeaderHeight

                const getNews = document.getElementById('newsWrapper')
                const getNewsHeight = getNews.offsetHeight

                const getAbout = document.getElementById('aboutWrapper')
                const getAboutHeight = getAbout.offsetHeight

                const getContact = document.getElementById('contactWrapper')
                const getContactHeight = getContact.offsetHeight
                console.log(getHomeHeight + 'Home')
                console.log(getNewsHeight + 'News')
                console.log(getAboutHeight + 'About')
                console.log(getContactHeight + 'Contact')
                console.log('getHeight')
                
                let getNewsNav = document.getElementById('newsLi')
                let getAboutNav = document.getElementById('aboutLi')
                let getContactNav = document.getElementById('contactLi')

                window.onscroll = function () {
                    let getNavbar = document.getElementsByTagName('li')
                    if (news.classList.contains('allOpen')) {
                    
                    } else {
                        // Home
                        if (window.pageYOffset > 0 && window.pageYOffset < getHomeHeight) {
                            title.innerHTML = data['siteContent'][0]['prepare']['title'] + ' | Home';
                            document.documentElement.style.setProperty('--primary-text-color', '#000000');
                            document.documentElement.style.setProperty('--primary-background-color', '255, 255, 255');
                            
                            getNewsNav.classList.remove('active')
                            getAboutNav.classList.remove('active')
                            getContactNav.classList.remove('active')


                            if (data['siteContent'][0]['header']['logo']['src1'] == '' || undefined) {
                                titleLink.classList.add('hoverable')
                                titleLink.innerHTML = data['siteContent'][0]['prepare']['title'] + ' | Home';
                            } else {
                                logo.src = data['siteContent'][0]['header']['logo']['src1'];
                            }

                            for (let i = 0; i < getNavbar.length; i++) {
                                getNavbar[i].classList.add('hoverable')
                            }
                        }
                        // News
                        if (window.pageYOffset > getHomeHeight && window.pageYOffset < getHomeHeight + getNewsHeight) {
                            title.innerHTML = data['siteContent'][0]['prepare']['title'] + ' | News';
                            document.documentElement.style.setProperty('--primary-text-color', '#000000');
                            document.documentElement.style.setProperty('--primary-background-color', '255, 255, 255');
                            
                            getNewsNav.classList.add('active')
                            getAboutNav.classList.remove('active')
                            getContactNav.classList.remove('active')

                            if (data['siteContent'][0]['header']['logo']['src1'] == '' || undefined) {
                                titleLink.classList.add('hoverable')
                                titleLink.innerHTML = data['siteContent'][0]['prepare']['title'] + ' | News';
                            } else {
                                logo.src = data['siteContent'][0]['header']['logo']['src1'];
                            }

                            for (let i = 0; i < getNavbar.length; i++) {
                                getNavbar[i].classList.add('hoverable')
                            }
                        }

                        // About
                        if (window.pageYOffset > getHomeHeight + getNewsHeight && window.pageYOffset < getHomeHeight + getNewsHeight + getAboutHeight) {
                            title.innerHTML = data['siteContent'][0]['prepare']['title'] + ' | About';
                            document.documentElement.style.setProperty('--primary-text-color', '#ffffff');
                            document.documentElement.style.setProperty('--primary-background-color', '0, 0, 0');
                            
                            getNewsNav.classList.remove('active')
                            getAboutNav.classList.add('active')
                            getContactNav.classList.remove('active')
                            
                            if (data['siteContent'][0]['header']['logo']['src2'] == '' || undefined) {
                                titleLink.classList.add('hoverable')
                                titleLink.innerHTML = data['siteContent'][0]['prepare']['title'] + ' | About';
                            } else {
                                logo.src = data['siteContent'][0]['header']['logo']['src2'];
                            }
                        }

                        // Contact
                        if (pageYOffset > getHomeHeight + getNewsHeight + getAboutHeight && window.pageYOffset < getHomeHeight + getNewsHeight + getAboutHeight + getContactHeight) {
                            title.innerHTML = data['siteContent'][0]['prepare']['title'] + ' | Contact';
                            document.documentElement.style.setProperty('--primary-text-color', '#000000');
                            document.documentElement.style.setProperty('--primary-background-color', '255, 255, 255');
                            
                            getNewsNav.classList.remove('active')
                            getAboutNav.classList.remove('active')
                            getContactNav.classList.add('active')

                            if (data['siteContent'][0]['header']['logo']['src1'] == '' || undefined) {
                                titleLink.classList.add('hoverable')
                                titleLink.innerHTML = data['siteContent'][0]['prepare']['title'] + ' | Contact';
                            } else {
                                logo.src = data['siteContent'][0]['header']['logo']['src1'];
                            }
                        }
                    }
                }

            }, 200)

        }
    })

