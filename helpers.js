import moment from 'moment';

export const constants = {
    EYEWITNESS: 'iWitness',
    AGENT: 'pollingUnitAgent',
    DASHBOARD: "Dashboard", 
    MY_ACTIVITY_REPORT: "My Activity Report",
    EYEWITNESS_REPORT: "Eyewitness Report",
    ELECTION_RESULT: 'Election Result', 
    NEWS: 'News', 
    RESULT_COLLATION: 'Result Collation',
    WALLET: 'Wallet',
    MESSAGES: 'Messages',
    MY_ACCOUNT_INFO: "My Account Info"
}

export function makeSlug(subject){
    if(!subject){
        return "";
    }else if(typeof(subject) != 'string'){
        return "";
    }

    return subject.replaceAll(' ', '-').toLowerCase();
}

export function getInitials(subject){
    if(!subject){
        return "";
    }else if(!subject.trim().length){
        return "";
    }
    const subject_array = subject.split(" ");

    let initials = "";

    subject_array.forEach(element => {

        element = element.trim();
        initials += element.charAt(0);        
    });

    return initials.toUpperCase();

}

export function ellipsify(subject, length=10){
    if(!subject){
        return "";
    }else if(!subject.trim().length){
        return "";
    }
    
    if(subject.length <= length){
        return subject;
    }

    return subject.slice(0, length) + '...';
}

export function titleCase(str) {
    if(!str){
        return "";;
    }
    str = str.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}

export function displayCount(count){
    if(count > 99){
        return '99+';
    }
    return count;
}

export function getFirstName(full_name){
    if(!full_name){
        return '';
    }
    return full_name.split(' ')[0];
}

export function getLastName(full_name){
    if(!full_name){
        return '';
    }
    const full_name_array = full_name.split(' ');
    return full_name_array[full_name_array.length - 1];
}


export function logout(){
    localStorage.clear();
    window.location = '/auth/login';
}

export function getTime(datetime){
    if(!datetime || datetime.trim() == ''){
        return '';
    }

    try{

        return moment(datetime).format('hh:mm A');

    }catch(e){
        console.log(e);
        return '';
    }
}

export function isMobile() {
    // const userAgent = /Mobi|Android/i.test(navigator.userAgent);
    const screenSize = window.matchMedia("(max-width: 767px)").matches;
    // return userAgent || screenSize;
    return screenSize;
}

export function getToken(){
    return localStorage.getItem('token');
}