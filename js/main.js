//Global Api
const domain = 'https://location.selopian.us/api';




// var today = new Date();
// var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//









// Light Mode / Dark Mode
function darkMode(el) {
    const body = document.getElementsByTagName('body')[0];
    const hr = document.querySelectorAll('div:not(.sidenav) > hr');
    const hr_card = document.querySelectorAll('div:not(.bg-gradient-dark) hr');
    const text_btn = document.querySelectorAll('button:not(.btn) > .text-dark');
    const text_span = document.querySelectorAll('span.text-dark, .breadcrumb .text-dark');
    const text_span_white = document.querySelectorAll('span.text-white, .breadcrumb .text-white');
    const text_strong = document.querySelectorAll('strong.text-dark');
    const text_strong_white = document.querySelectorAll('strong.text-white');
    const text_nav_link = document.querySelectorAll('a.nav-link.text-dark');
    const text_nav_link_white = document.querySelectorAll('a.nav-link.text-white');
    const secondary = document.querySelectorAll('.text-secondary');
    const bg_gray_100 = document.querySelectorAll('.bg-gray-100');
    const bg_gray_600 = document.querySelectorAll('.bg-gray-600');
    const btn_text_dark = document.querySelectorAll('.btn.btn-link.text-dark, .material-icons.text-dark');
    const btn_text_white = document.querySelectorAll('.btn.btn-link.text-white, .material-icons.text-white');
    const card_border = document.querySelectorAll('.card.border');
    const card_border_dark = document.querySelectorAll('.card.border.border-dark');

    const svg = document.querySelectorAll('g');

    if (!el.getAttribute("checked")) {
        body.classList.add('dark-version');
        for (var i = 0; i < hr.length; i++) {
            if (hr[i].classList.contains('dark')) {
                hr[i].classList.remove('dark');
                hr[i].classList.add('light');
            }
        }

        for (var i = 0; i < hr_card.length; i++) {
            if (hr_card[i].classList.contains('dark')) {
                hr_card[i].classList.remove('dark');
                hr_card[i].classList.add('light');
            }
        }
        for (var i = 0; i < text_btn.length; i++) {
            if (text_btn[i].classList.contains('text-dark')) {
                text_btn[i].classList.remove('text-dark');
                text_btn[i].classList.add('text-white');
            }
        }
        for (var i = 0; i < text_span.length; i++) {
            if (text_span[i].classList.contains('text-dark')) {
                text_span[i].classList.remove('text-dark');
                text_span[i].classList.add('text-white');
            }
        }
        for (var i = 0; i < text_strong.length; i++) {
            if (text_strong[i].classList.contains('text-dark')) {
                text_strong[i].classList.remove('text-dark');
                text_strong[i].classList.add('text-white');
            }
        }
        for (var i = 0; i < text_nav_link.length; i++) {
            if (text_nav_link[i].classList.contains('text-dark')) {
                text_nav_link[i].classList.remove('text-dark');
                text_nav_link[i].classList.add('text-white');
            }
        }
        for (var i = 0; i < secondary.length; i++) {
            if (secondary[i].classList.contains('text-secondary')) {
                secondary[i].classList.remove('text-secondary');
                secondary[i].classList.add('text-white');
                secondary[i].classList.add('opacity-8');
            }
        }
        for (var i = 0; i < bg_gray_100.length; i++) {
            if (bg_gray_100[i].classList.contains('bg-gray-100')) {
                bg_gray_100[i].classList.remove('bg-gray-100');
                bg_gray_100[i].classList.add('bg-gray-600');
            }
        }
        for (var i = 0; i < btn_text_dark.length; i++) {
            btn_text_dark[i].classList.remove('text-dark');
            btn_text_dark[i].classList.add('text-white');
        }
        for (var i = 0; i < svg.length; i++) {
            if (svg[i].hasAttribute('fill')) {
                svg[i].setAttribute('fill', '#fff');
            }
        }
        for (var i = 0; i < card_border.length; i++) {
            card_border[i].classList.add('border-dark');
        }
        el.setAttribute("checked", "true");
    } else {
        body.classList.remove('dark-version');
        for (var i = 0; i < hr.length; i++) {
            if (hr[i].classList.contains('light')) {
                hr[i].classList.add('dark');
                hr[i].classList.remove('light');
            }
        }
        for (var i = 0; i < hr_card.length; i++) {
            if (hr_card[i].classList.contains('light')) {
                hr_card[i].classList.add('dark');
                hr_card[i].classList.remove('light');
            }
        }
        for (var i = 0; i < text_btn.length; i++) {
            if (text_btn[i].classList.contains('text-white')) {
                text_btn[i].classList.remove('text-white');
                text_btn[i].classList.add('text-dark');
            }
        }
        for (var i = 0; i < text_span_white.length; i++) {
            if (text_span_white[i].classList.contains('text-white') && !text_span_white[i].closest('.sidenav') && !text_span_white[i].closest('.card.bg-gradient-dark')) {
                text_span_white[i].classList.remove('text-white');
                text_span_white[i].classList.add('text-dark');
            }
        }
        for (var i = 0; i < text_strong_white.length; i++) {
            if (text_strong_white[i].classList.contains('text-white')) {
                text_strong_white[i].classList.remove('text-white');
                text_strong_white[i].classList.add('text-dark');
            }
        }
        for (var i = 0; i < text_nav_link_white.length; i++) {
            if (text_nav_link_white[i].classList.contains('text-white') && !text_nav_link_white[i].closest('.sidenav')) {
                text_nav_link_white[i].classList.remove('text-white');
                text_nav_link_white[i].classList.add('text-dark');
            }
        }
        for (var i = 0; i < secondary.length; i++) {
            if (secondary[i].classList.contains('text-white')) {
                secondary[i].classList.remove('text-white');
                secondary[i].classList.remove('opacity-8');
                secondary[i].classList.add('text-dark');
            }
        }
        for (var i = 0; i < bg_gray_600.length; i++) {
            if (bg_gray_600[i].classList.contains('bg-gray-600')) {
                bg_gray_600[i].classList.remove('bg-gray-600');
                bg_gray_600[i].classList.add('bg-gray-100');
            }
        }
        for (var i = 0; i < svg.length; i++) {
            if (svg[i].hasAttribute('fill')) {
                svg[i].setAttribute('fill', '#252f40');
            }
        }
        for (var i = 0; i < btn_text_white.length; i++) {
            if (!btn_text_white[i].closest('.card.bg-gradient-dark')) {
                btn_text_white[i].classList.remove('text-white');
                btn_text_white[i].classList.add('text-dark');
            }
        }
        for (var i = 0; i < card_border_dark.length; i++) {
            card_border_dark[i].classList.remove('border-dark');
        }
        el.removeAttribute("checked");
    }
};



//Login Check
function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            //return c.substring(name.length, c.length);
            return true;
        }
    }
    return false;
}

// check which mode from cookie
/// set dark mode or do nothing for ligh mode
//console.log(darkMode(this));



if (!getCookie("token") && location.href.replace(/.*\/\/[^\/]*/, '') != "/status_project/login.html") {
    window.location.replace("/status_project/login.html");
}


//LOGIN
window.logIn =
    function () {
        return {
            LogInData: {
                email: '',
                password: '',
            },
            messageType: '',
            pushNotify(status, title, text) {
                new Notify({
                    status: status,
                    title: title,
                    text: text,
                    effect: 'fade',
                    speed: 300,
                    customClass: null,
                    customIcon: null,
                    showIcon: true,
                    showCloseButton: true,
                    autoclose: false,
                    autotimeout: 3000,
                    gap: 20,
                    distance: 20,
                    type: 1,
                    position: 'right top'
                })
            },
            logInService() {
                fetch(domain + '/login', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(this.LogInData)

                })

                    .then((response) => {
                        if (!response.ok) {
                            throw new Error();
                        }
                        return response.json();
                    })
                    .then((data) => {

                        const d = new Date();
                        d.setTime(d.getTime() + (1 * 1 * 60 * 60 * 1000));
                        let expires = "expires=" + d.toUTCString();
                        document.cookie = "token" + "=" + data.access_token + "; " + expires + "; path=/; secure; sameSite=Lax";
                        //document.cookie = "theme=1";
                            window.location = "index.html"

                    })
                    .catch((error) => {
                        this.pushNotify("error", error, 'UserName or Password Invalid')

                    })
            },

        }
    };




window.logOut =
    function () {
        return {
            messageType: '',
            pushNotify(status, title, text) {
                new Notify({
                    status: status,
                    title: title,
                    text: text,
                    effect: 'fade',
                    speed: 300,
                    customClass: null,
                    customIcon: null,
                    showIcon: true,
                    showCloseButton: true,
                    autoclose: false,
                    autotimeout: 3000,
                    gap: 20,
                    distance: 20,
                    type: 1,
                    position: 'right top'
                })
            },

            getToken() {
                var match = document.cookie.match(new RegExp('(^| )token=([^;]+)'));
                if (match) return match[2];
            },

            logOutService() {
                fetch(domain + '/logout', {
                    method: 'POST',
                    headers: {'Authorization': 'bearer ' + this.getToken()}
                })
                    .then((response) => {
                        if (!response.ok) {
                            throw new Error();
                        }
                        return response.json();
                    })
                    .then((data) => {

                        // clear all cookie variable - jwt, id, profile.. and others

                        window.location = "login.html"
                        this.pushNotify('success', 'Success', 'Successfully LogOut ')

                    })
                    .catch((error) => {
                        window.location = "login.html"
                    })
            },

        }
    };





//USER--------------------------------------------------------------
window.services =
    function () {
        return {
            userData: {
                name: '',
                email: '',
                role: '',
                password: '',
                password_confirmation: '',
            },
            editModalData: {
                name: '',
                email: '',
                role: '',
            },
            editUserModalPassword: {
                old_password: '',
                password: '',
                password_confirmation: '',
            },
            updatedId: '',
            messageType: '',
            message: '',
            services: [],
            loggedInID: '',
            firstPage: '',
            lastPage: '',
            currentPage: '',
            totalPage: '',
            pagination: '',

            getToken() {
                var match = document.cookie.match(new RegExp('(^| )token=([^;]+)'));
                if (match) return match[2];
            },






            pushNotify(status, title, text) {
                new Notify({
                    status: status,
                    title: title,
                    text: text,
                    effect: 'fade',
                    speed: 300,
                    customClass: null,
                    customIcon: null,
                    showIcon: true,
                    showCloseButton: true,
                    autoclose: true,
                    autotimeout: 3000,
                    gap: 20,
                    distance: 20,
                    type: 1,
                    position: 'right top'
                })
            },

            async initUser(page = 1) {
                this.userProfile();
                let userData;
                let response = await fetch(domain + '/user-list?page=' + page, {
                    method: 'GET',
                    headers: {'Authorization': 'bearer ' + this.getToken()},
                });
                if (response.ok) {
                    userData = await response.json();
                } else {
                    userData = [];
                }
                this.services = [];
                this.services = userData.users.data;
                this.firstPage = userData.users.from;
                this.lastPage = userData.users.last_page;
                this.totalPage = userData.users.last_page;
                this.currentPage = userData.users.current_page;


                let pagination_number;
                let pegination_fatch = await fetch(domain + '/paginate-settings?name=users', {
                    method: 'GET',
                    headers: {'Authorization': 'bearer ' + this.getToken()},
                });
                if (pegination_fatch.ok) {
                    pagination_number = await pegination_fatch.json();
                } else {
                    pagination_number = [];
                }
                this.pagination = pagination_number.per_page;
            },

            // userTable:'',

            addUser() {
                fetch(domain + '/register', {
                    method: 'POST',
                    headers: {
                        'Authorization': 'bearer ' + this.getToken(),
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(this.userData)
                })
                    .then(async response => {
                        const data = await response.json();
                        // console.log(data.error);
                        if(!response.ok) {

                            for (const key in data.error) {
                                this.pushNotify("error",data.error[key],'')
                            }
                        }else{

                            this.services.unshift({
                                name: this.userData['name'],
                                email: this.userData['email'],
                                role: this.userData["role"],
                                status: "Offline",
                            });
                            const user_modal = document.querySelector('#add_user_modal');
                            const modal = bootstrap.Modal.getInstance(user_modal);
                            modal.hide();

                            console.log(data.message);

                            this.pushNotify("success",data.message,'User Added Successfully')
                        }
                    })

            },


            userProfile() {
                fetch(domain + '/profile', {
                    method: 'GET',
                    headers: {'Authorization': 'bearer' + this.getToken()},
                })
                    .then((response) => {
                        if (!response.ok) {
                            throw new Error();
                        }
                        return response.json();
                    })
                    .then((data) => {
                        this.loggedInID = data.user.id;

                        // save it in cookie
                        //user_id = 111
                        //user_name = Montu Mia


                    })

            },

            paginationData: {
                name: 'users',
                per_page: '',
            },

            updatePagination() {
                fetch(domain + '/paginate-settings-update', {
                    method: 'PUT',
                    headers: {
                        'Authorization': 'bearer ' + this.getToken(),
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(this.paginationData),
                })
                    .then((response) => {
                        if (!response.ok) {
                            throw new Error();
                        }
                        return response.json();
                    })

                    .then((data) => {

                        this.initUser();

                    })
            },


            editUser(userId) {
                let position = this.services.findIndex(el => el.id === userId);
                this.updatedId = this.services[position]['id'];
                this.editModalData['id'] = this.services[position]['id'];
                this.editModalData['name'] = this.services[position]['name'];
                this.editModalData['email'] = this.services[position]['email'];
                this.editModalData['role'] = this.services[position]['role'];
            },

            updateUser() {
                fetch(domain + '/user-update', {
                    method: 'PUT',
                    headers: {
                        'Authorization': 'bearer ' + this.getToken(),
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(this.editModalData),
                })

                    .then(async responsel => {
                        const data = await responsel.json();
                        if(!responsel.ok) {
                            for (const key in data.error) {
                                this.pushNotify("error",data.error[key],'')

                            }
                        }else{
                            let position = this.services.findIndex(el => el.id === this.updatedId);
                            this.services[position]['name'] = this.editModalData['name'];
                            this.services[position]['email'] = this.editModalData['email'];
                            this.services[position]['role'] = this.editModalData['role'];

                            this.updatedId = '';
                            this.editModalData['name'] = '';
                            this.editModalData['email'] = '';
                            this.editModalData['role'] = '';
                            const user_modal = document.querySelector('#edit_user_modal');
                            const modal = bootstrap.Modal.getInstance(user_modal);
                            modal.hide();
                            this.pushNotify('success', 'Success', 'User Update Successfully')

                        }
                    })
            },


            editUserPassword(userId) {
                let position = this.services.findIndex(el => el.id === userId);
                this.updatedId = this.services[position]['id'];
                this.editUserModalPassword['id'] = this.services[position]['id'];
            },

            updatePassword() {
                fetch(domain + '/user-password-update', {
                    method: 'PUT',
                    headers: {
                        'Authorization': 'bearer ' + this.getToken(),
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(this.editUserModalPassword),
                })
                    .then(async responselm => {
                        const data = await responselm.json();
                        if(!responselm.ok) {
                            for (const key in data.error) {
                                this.pushNotify("error",data.error[key],'')

                            }
                        }else{
                            const user_modal = document.querySelector('#edit_user_modal');
                            const modal = bootstrap.Modal.getInstance(user_modal);
                            modal.hide();
                            this.pushNotify('success', 'Success', 'Password Update Successfully')
                        }
                    })
            },

            deleteUser(locationId) {
                let position = this.services.findIndex(el => el.id === locationId);
                this.updatedId = this.services[position]['id'];
            },

            deleteUsere() {
                fetch(domain + '/user-delete/' + this.updatedId, {
                    method: 'DELETE',
                    headers: {
                        'Authorization': 'bearer' + this.getToken()
                    },
                })
                    .then(response => {
                        const user_modal = document.querySelector('#delete_user_modal');
                        const modal = bootstrap.Modal.getInstance(user_modal);
                        modal.hide();
                        let position = this.services.findIndex(el => el.id === this.updatedId);
                        this.services.splice(position, 1);
                        this.pushNotify('success', 'Success', 'User Delete Successfully ')


                    })
                    .catch(error => {
                        this.pushNotify('error', 'Success', 'User Can not Delete')

                    });
            },
        }
    };


window.locationService =

    function () {
        return {
            locationData: {
                name: '',
                ip_address: '',
                router_type: '',
                feed_type: '',
                username: '',
                password: '',
                feed_ip_address: '',
                feed_port: '',
                router_port: '',
            },
            messageType: '',
            message: '',
            editLocationData: {
                name: '',
                ip_address: '',
                router_type: '',
                feed_type: '',
                username: '',
                password: '',
                feed_ip_address: '',
                feed_port: '',
                router_port: '',
            },
            update_location_id: '',
            servicesLocation: [],
            routerTypeList: [],
            feedTypeList: [],

            lFirstPage: '',
            lLastPage: '',
            lCurrentPage: '',
            lTotalPage: '',
            lPagination: '',

            getToken() {
                var match = document.cookie.match(new RegExp('(^| )token=([^;]+)'));
                if (match) return match[2];
            },

            pushNotify(status, title, text) {
                new Notify({
                    status: status,
                    title: title,
                    text: text,
                    effect: 'fade',
                    speed: 300,
                    customClass: null,
                    customIcon: null,
                    showIcon: true,
                    showCloseButton: true,
                    autoclose: true,
                    autotimeout: 3000,
                    gap: 20,
                    distance: 20,
                    type: 1,
                    position: 'right top'
                })
            },

            async initLocation(page = 1) {
                let locationData;
                let response = await fetch(domain + '/location-list?page=' + page, {
                    method: 'GET',
                    headers: {'Authorization': 'bearer ' + this.getToken()},
                });
                if (response.ok) {
                    locationData = await response.json();
                } else {
                    locationData = [];
                }
                this.servicesLocation = [];

                this.servicesLocation = locationData.locations.data;
                this.lFirstPage = locationData.locations.from;
                this.lLastPage = locationData.locations.last_page;
                this.lTotalPage = locationData.locations.last_page;
                this.lCurrentPage = locationData.locations.current_page;


                let lPagination_number;
                let lPegination_fatch = await fetch(domain + '/paginate-settings?name=location', {
                    method: 'GET',
                    headers: {'Authorization': 'bearer ' + this.getToken()},
                });

                if (lPegination_fatch.ok) {
                    lPagination_number = await lPegination_fatch.json();
                } else {
                    lPagination_number = [];
                }
                this.lPagination = lPagination_number.per_page;

            },


            lPaginationData: {
                name: 'location',
                per_page: '',
            },


            updatelPagination() {
                fetch(domain + '/paginate-settings-update', {
                    method: 'PUT',
                    headers: {
                        'Authorization': 'bearer ' + this.getToken(),
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(this.lPaginationData),
                })
                    .then((response) => {
                        if (!response.ok) {
                            throw new Error();
                        }
                        return response.json();
                    })

                    .then((data) => {

                        this.initLocation();

                    })

            },


            async routerType() {
                let routerType;
                let response = await fetch(domain + '/router-type-list', {
                    method: 'GET',
                    headers: {'Authorization': 'bearer ' + this.getToken()},
                });
                if (response.ok) {
                    routerType = await response.json();
                } else {
                    routerType = [];
                }
                this.routerTypeList = routerType.data;

            },

            async feedType() {
                let feedType;
                let response = await fetch(domain + '/live-feed-type-list', {
                    method: 'GET',
                    headers: {'Authorization': 'bearer ' + this.getToken()},
                });
                if (response.ok) {
                    feedType = await response.json();
                } else {
                    feedType = [];
                }
                this.feedTypeList = feedType.data;
            },

            addLocation() {

                fetch(domain + '/location-store', {
                    method: 'POST',
                    headers: {
                        'Authorization': 'bearer ' + this.getToken(),
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(this.locationData)
                })

                    .then(async responsei => {
                        const data = await responsei.json();
                        console.log(data);
                        if(!responsei.ok) {
                            for (const key in data.error) {
                                this.pushNotify("error",data.error[key],'')

                            }
                        }else{

                            this.servicesLocation.unshift({
                                name: this.locationData['name'],
                                ip_address: this.locationData['ip_address'],
                                status: "Inactive"
                            });
                            const user_modal = document.querySelector('#add_location_modal');
                            const modal = bootstrap.Modal.getInstance(user_modal);
                            modal.hide();

                            this.pushNotify("success",data.message,'Location Added Successfully')
                        }
                    })

            },

            editLocation(userId) {
                let position = this.servicesLocation.findIndex(el => el.id === userId);
                this.update_location_id = this.servicesLocation[position]['id'];
                this.editLocationData['id'] = this.servicesLocation[position]['id'];
                this.editLocationData['name'] = this.servicesLocation[position]['name'];
                this.editLocationData['ip_address'] = this.servicesLocation[position]['ip_address'];
                this.editLocationData['router_type'] = this.servicesLocation[position]['router_type'];
                this.editLocationData['feed_type'] = this.servicesLocation[position]['feed_type'];
                this.editLocationData['username'] = this.servicesLocation[position]['username'];
                this.editLocationData['password'] = this.servicesLocation[position]['password'];
                this.editLocationData['router_port'] = this.servicesLocation[position]['router_port'];
                this.editLocationData['feed_ip_address'] = this.servicesLocation[position]['feed_ip_address'];
                this.editLocationData['feed_port'] = this.servicesLocation[position]['feed_port'];
            },

            updateLocation() {
                fetch(domain + '/location-update', {
                    method: 'PUT',
                    headers: {
                        'Authorization': 'bearer ' + this.getToken(),
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(this.editLocationData),
                })
                    .then(async responsela => {
                        const data = await responsela.json();
                        if(!responsela.ok) {
                            for (const key in data.error) {
                                this.pushNotify("error",data.error[key],'')

                            }
                        }else{
                            // let position = this.servicesLocation.findIndex(el => el.id === this.updatedId);
                            // this.servicesLocation[position]['name'] = this.editLocationData['name'];
                            // this.servicesLocation[position]['ip_address'] = this.editLocationData['email'];
                            // this.servicesLocation[position]['router_type'] = this.editLocationData['router_type'];
                            // this.servicesLocation[position]['feed_type'] = this.editLocationData['feed_type'];

                            const edit_location_modal = document.querySelector('#edit_location_modal');
                            const modal = bootstrap.Modal.getInstance(edit_location_modal);
                            modal.hide();

                            this.pushNotify('success', 'Success', 'Location Update Successfully')

                        }
                    })


            },


            deleteLocation(userId) {
                let position = this.servicesLocation.findIndex(el => el.id === userId);
                this.update_location_id = this.servicesLocation[position]['id'];

            },

            deleteLocationList() {
                fetch(domain + '/location-delete/' + this.update_location_id, {
                    method: 'DELETE',
                    headers: {
                        'Authorization': 'bearer' + this.getToken()
                    },
                })
                    .then(response => {

                        const location_modal = document.querySelector('#delete_location_modal');
                        const modal = bootstrap.Modal.getInstance(location_modal);
                        modal.hide();

                        let position = this.servicesLocation.findIndex(el => el.id === this.update_location_id);
                        this.servicesLocation.splice(position, 1);
                        this.pushNotify('success', 'Success', 'Location Deleted Successfully ')

                    })
                    .catch(error => {
                        this.pushNotify('error', 'Success', 'Location Can Not Delete')

                    });
            },

        }
    };


window.setting = function () {
    return {
        getToken() {
            var match = document.cookie.match(new RegExp('(^| )token=([^;]+)'));
            if (match) return match[2];
        },

        frequency: [],
        times: [5, 10, 30, 59],


        pushNotify(status, title, text) {
            new Notify({
                status: status,
                title: title,
                text: text,
                effect: 'fade',
                speed: 300,
                customClass: null,
                customIcon: null,
                showIcon: true,
                showCloseButton: true,
                autoclose: true,
                autotimeout: 3000,
                gap: 20,
                distance: 20,
                type: 1,
                position: 'right top'
            })
        },


        async frequencySettings() {
            let frequency;
            let response = await fetch(domain + '/frequency-settings', {
                method: 'GET',
                headers: {'Authorization': 'bearer ' + this.getToken()},
            });

            if (response.ok) {
                frequency = await response.json();
            } else {
                frequency = [];
            }
            this.frequency = frequency.data;
        },


        async clearCash() {
            let cash;
            let response = await fetch(domain + '/clear-cache', {
                method: 'GET',
                headers: {'Authorization': 'bearer ' + this.getToken()},
            });

            if (response.ok) {
                cash = await response.json();
            } else {
                cash = [];
            }
        },


        frequencySettingsUpdate: {
            location_duration: '',
            feed_duration: '',

        },

        updatefrequencSertting() {
            fetch(domain + '/frequency-settings-update', {
                method: 'PUT',
                headers: {
                    'Authorization': 'bearer ' + this.getToken(),
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.frequencySettingsUpdate),
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error();
                    }
                    return response.json();
                })
                .then((data) => {
                    this.pushNotify('success', 'Success', 'Setting Update Successfully ')

                })
                .catch(() => {
                    this.pushNotify('error', 'error', 'Setting Can Not Update')

                })
        },


    }

}

let days = []

window.dashboard = function () {
    return {
        getToken() {
            let match = document.cookie.match(new RegExp('(^| )token=([^;]+)'));
            if (match) return match[2];
        },





        dashBoardData: [],
        dashboardUserMessage: [],
        dashboardUserPerfomance: [],
        dashboardChart1: [],
        dashboardChart2: [],
        dashboardChart3: [],
        dashboardChart4: [],
        chart1days: [],
        chart1Data: [],
        chart2days: [],
        chart2Data: [],
        chart3days: [],
        chart3Data: [],
        chart4days: [],
        chart4Data: [],
        searchText: '',


        async getDashboard() {
            let dashboard;
            let response = await fetch(domain + '/dashboard', {
                method: 'GET',
                headers: {'Authorization': 'bearer ' + this.getToken()},
            });

            if (response.ok) {
                dashboard = await response.json();
            } else {
                dashboard = [];
            }
            this.dashBoardData = dashboard.data;
            this.dashboardUserMessage = this.dashBoardData.logs;
            this.dashboardUserPerfomance = this.dashBoardData.location_performance;
            this.dashboardChart1 = this.dashBoardData.location_active_day;
            this.dashboardChart2 = this.dashBoardData.location_active_month;
            this.dashboardChart3 = this.dashBoardData.feed_active_day;
            this.dashboardChart4 = this.dashBoardData.feed_active_month;


            for (const i in this.dashboardChart1) {
                this.chart1days.push(i)
                this.chart1Data.push(this.dashboardChart1[i])
            }

            for (const i in this.dashboardChart2) {
                this.chart2days.push(i)
                this.chart2Data.push(this.dashboardChart2[i])
            }

            for (const i in this.dashboardChart3) {
                this.chart3days.push(i)
                this.chart3Data.push(this.dashboardChart3[i])
            }


            for (const i in this.dashboardChart4) {
                this.chart4days.push(i)
                this.chart4Data.push(this.dashboardChart4[i])
            }
            // chart 01 starts from here
            let ctx = document.getElementById("chart-bars").getContext("2d");
            new Chart(ctx, {
                type: "bar",
                data: {
                    labels: this.chart1days,
                    datasets: [{
                        label: "Location",
                        tension: 0.4,
                        borderWidth: 0,
                        borderRadius: 4,
                        borderSkipped: false,
                        backgroundColor: "rgba(255, 255, 255, .8)",
                        data: this.chart1Data,
                        maxBarThickness: 6
                    },],
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false,
                        }
                    },
                    interaction: {
                        intersect: false,
                        mode: 'index',
                    },
                    scales: {
                        y: {
                            grid: {
                                drawBorder: false,
                                display: true,
                                drawOnChartArea: true,
                                drawTicks: false,
                                borderDash: [5, 5],
                                color: 'rgba(255, 255, 255, .2)'
                            },
                            ticks: {
                                suggestedMin: 0,
                                suggestedMax: 500,
                                beginAtZero: true,
                                padding: 10,
                                font: {
                                    size: 14,
                                    weight: 300,
                                    family: "Roboto",
                                    style: 'normal',
                                    lineHeight: 2
                                },
                                color: "#fff"
                            },
                        },
                        x: {
                            grid: {
                                drawBorder: false,
                                display: true,
                                drawOnChartArea: true,
                                drawTicks: false,
                                borderDash: [5, 5],
                                color: 'rgba(255, 255, 255, .2)'
                            },
                            ticks: {
                                display: true,
                                color: '#f8f9fa',
                                padding: 10,
                                font: {
                                    size: 14,
                                    weight: 300,
                                    family: "Roboto",
                                    style: 'normal',
                                    lineHeight: 2
                                },
                            }
                        },
                    },
                },
            });
            // chart 01 ends from here

            // chart 02 starts from here
            let ctx2 = document.getElementById("chart-line").getContext("2d");
            new Chart(ctx2, {
                type: "line",
                data: {
                    labels: this.chart2days,
                    datasets: [{
                        label: "Location",
                        tension: 0,
                        borderWidth: 0,
                        pointRadius: 5,
                        pointBackgroundColor: "rgba(255, 255, 255, .8)",
                        pointBorderColor: "transparent",
                        borderColor: "rgba(255, 255, 255, .8)",
                        borderColor: "rgba(255, 255, 255, .8)",
                        borderWidth: 4,
                        backgroundColor: "transparent",
                        fill: true,
                        data: this.chart2Data,
                        maxBarThickness: 6

                    }],
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false,
                        }
                    },
                    interaction: {
                        intersect: false,
                        mode: 'index',
                    },
                    scales: {
                        y: {
                            grid: {
                                drawBorder: false,
                                display: true,
                                drawOnChartArea: true,
                                drawTicks: false,
                                borderDash: [5, 5],
                                color: 'rgba(255, 255, 255, .2)'
                            },
                            ticks: {
                                display: true,
                                color: '#f8f9fa',
                                padding: 10,
                                font: {
                                    size: 14,
                                    weight: 300,
                                    family: "Roboto",
                                    style: 'normal',
                                    lineHeight: 2
                                },
                            }
                        },
                        x: {
                            grid: {
                                drawBorder: false,
                                display: false,
                                drawOnChartArea: false,
                                drawTicks: false,
                                borderDash: [5, 5]
                            },
                            ticks: {
                                display: true,
                                color: '#f8f9fa',
                                padding: 10,
                                font: {
                                    size: 14,
                                    weight: 300,
                                    family: "Roboto",
                                    style: 'normal',
                                    lineHeight: 2
                                },
                            }
                        },
                    },
                },
            });
            // chart 02 ends from here

            // chart 03 starts from here
            let ctx3 = document.getElementById("chart-bars3").getContext("2d");
            new Chart(ctx3, {
                type: "bar",
                data: {
                    labels: this.chart3days,
                    datasets: [{
                        label: "Feed",
                        tension: 0.4,
                        borderWidth: 0,
                        borderRadius: 4,
                        borderSkipped: false,
                        backgroundColor: "rgba(255, 255, 255, .8)",
                        data: this.chart3Data,
                        maxBarThickness: 6
                    },],
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false,
                        }
                    },
                    interaction: {
                        intersect: false,
                        mode: 'index',
                    },
                    scales: {
                        y: {
                            grid: {
                                drawBorder: false,
                                display: true,
                                drawOnChartArea: true,
                                drawTicks: false,
                                borderDash: [5, 5],
                                color: 'rgba(255, 255, 255, .2)'
                            },
                            ticks: {
                                suggestedMin: 0,
                                suggestedMax: 500,
                                beginAtZero: true,
                                padding: 10,
                                font: {
                                    size: 14,
                                    weight: 300,
                                    family: "Roboto",
                                    style: 'normal',
                                    lineHeight: 2
                                },
                                color: "#fff"
                            },
                        },
                        x: {
                            grid: {
                                drawBorder: false,
                                display: true,
                                drawOnChartArea: true,
                                drawTicks: false,
                                borderDash: [5, 5],
                                color: 'rgba(255, 255, 255, .2)'
                            },
                            ticks: {
                                display: true,
                                color: '#f8f9fa',
                                padding: 10,
                                font: {
                                    size: 14,
                                    weight: 300,
                                    family: "Roboto",
                                    style: 'normal',
                                    lineHeight: 2
                                },
                            }
                        },
                    },
                },
            });

            // chart 03 ends from here

            // chart 04 starts from here
            var ctx4 = document.getElementById("chart-line-tasks4").getContext("2d");

            new Chart(ctx4, {
                type: "line",
                data: {
                    labels: this.chart4days,
                    datasets: [{
                        label: "Feed",
                        tension: 0,
                        borderWidth: 0,
                        pointRadius: 5,
                        pointBackgroundColor: "rgba(255, 255, 255, .8)",
                        pointBorderColor: "transparent",
                        borderColor: "rgba(255, 255, 255, .8)",
                        borderColor: "rgba(255, 255, 255, .8)",
                        borderWidth: 4,
                        backgroundColor: "transparent",
                        fill: true,
                        data: this.chart4Data,
                        maxBarThickness: 6

                    }],
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false,
                        }
                    },
                    interaction: {
                        intersect: false,
                        mode: 'index',
                    },
                    scales: {
                        y: {
                            grid: {
                                drawBorder: false,
                                display: true,
                                drawOnChartArea: true,
                                drawTicks: false,
                                borderDash: [5, 5],
                                color: 'rgba(255, 255, 255, .2)'
                            },
                            ticks: {
                                display: true,
                                color: '#f8f9fa',
                                padding: 10,
                                font: {
                                    size: 14,
                                    weight: 300,
                                    family: "Roboto",
                                    style: 'normal',
                                    lineHeight: 2
                                },
                            }
                        },
                        x: {
                            grid: {
                                drawBorder: false,
                                display: false,
                                drawOnChartArea: false,
                                drawTicks: false,
                                borderDash: [5, 5]
                            },
                            ticks: {
                                display: true,
                                color: '#f8f9fa',
                                padding: 10,
                                font: {
                                    size: 14,
                                    weight: 300,
                                    family: "Roboto",
                                    style: 'normal',
                                    lineHeight: 2
                                },
                            }
                        },
                    },
                },
            })
            // chart 04 ends from here
        },

    }
}

