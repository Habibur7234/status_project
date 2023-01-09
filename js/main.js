//Global Api
const domain = 'https://location.selopian.us/api';









const generateVariable = (selector) => {
    return document.querySelector(selector)
}
let isChecked = generateVariable('#dark-version')

const getTheme = () => {
    return JSON.parse(window.localStorage.getItem("theme"));
}
let themeBody = generateVariable('.themeId')
const theme = () => {
    if(themeBody){
        if (getTheme().dark) {
            themeBody.classList.add("dark-version")
            isChecked.checked = true;
        } else {
            themeBody.classList.remove("dark-version")
            isChecked.checked = false;
        }
    }

}
theme(getTheme())
let active;
const themeChange =()=>{
    active = getTheme();
    if (!active.dark) {
        console.log(isChecked)
        window.localStorage.setItem("theme", JSON.stringify({dark:true}))
        theme()
    } else {
        console.log(isChecked)
        window.localStorage.setItem("theme", JSON.stringify({dark:false}))
        theme()
    }
}





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




if (!getCookie("token") && location.href.replace(/.*\/\/[^\/]*/, '') != "/login.html") {
    window.location.replace("/login.html");
}
//kkk


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
                }).then((response) => {
                    console.log(response)
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
                            // saveLogCredential(this.LogInData)
                    })
                    .catch((error) => {
                        this.pushNotify("error", error, 'UserName or Password Invalid')

                    })
            },

        }
    };

const token = document.cookie.split("=")[1]

const refreshToken = () => {
    fetch(domain + '/refresh', {
        method: 'GET',
        headers: {'Authorization': 'bearer ' + token}
    }).then(res => res.json())
        .then(data => {
            console.log(data)
            const date = new Date();
            date.setTime(date.getTime() + (1 * 1 * 60 * 60 * 1000));
            let expires = "expires=" + date.toUTCString();
            document.cookie = "token" + "=" + data.access_token + "; " + expires + "; path=/; secure; sameSite=Lax";
        })
}
let refreshTime = 1 * 60 * 1000;
setTimeout(refreshToken,refreshTime)




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
            userRole: '',

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
                // console.log(userData.roles)
                this.firstPage = userData.users.from;
                this.lastPage = userData.users.last_page;
                this.totalPage = userData.users.last_page;
                this.currentPage = userData.users.current_page;
                this.userRole = userData.roles;
                //this.userRole = userData.roleLabel;
                console.log(this.userRole);


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

                            // console.log(data);

                            // if (this.userData["role"] =='1'){
                            //     this.userData["role"]='Admin'
                            // }
                            // else {
                            //     this.userData["role"]='Manager'
                            // }
                            this.services.unshift({
                                id: data.user.id,
                                name: data.user.name,
                                email: data.user.email,
                                role: data.user.role,
                                role_id: data.user.role_id,
                                status: "Offline",
                            });

                            console.log(this.userRole);
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
                this.editModalData['role'] = this.services[position]['role_id'];

                console.log(this.editModalData);
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
                            this.services[position]['name'] = data.user.name;
                            this.services[position]['email'] = data.user.email;
                            this.services[position]['role_id'] = data.user.role_id;
                            this.services[position]['role'] = data.user.role;


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
                            let position = this.servicesLocation.findIndex(el => el.id === this.update_location_id);
                            this.servicesLocation[position]['name'] = this.editLocationData['name'];
                            this.servicesLocation[position]['ip_address'] = this.editLocationData['email'];
                            this.servicesLocation[position]['router_type'] = this.editLocationData['router_type'];
                            this.servicesLocation[position]['feed_type'] = this.editLocationData['feed_type'];

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

