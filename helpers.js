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

export const navItems = ['Our Mission', 'Election Results', 'Eye Witness', 'Resources'];
export const subItems = [
        ["About Us", "Mission Statement", "Methodology", "Initiatives"],
        ["Presidential", "Gubernational", "Senatorial", "Federal House of Representative", "State House of Representative", "Local Government", "Off-cycle elections"],
        ["Objectives", "How to volunteer", "Available polling unit"],
        ["Publications", "Elelction update", "Find polling unit"]
    ];
export const itemIds = [
        ["#about-us", "#mission-statement", "#methodology", "#initiatives"],
        ["#presidential", "#gubernational", "#senatorial", "#federal-house-of-representative", "#state-house-of-representative", "#local-government", "#off-cycle-elections"],
        ["#objectives", "#how-to-volunteer", "#available-polling-unit"],
        ["#publications", "#elelction-update", "#find-polling-unit"]
    ];

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

export function getProfilePercentages(profile){

    let percentages = {contact:0, general:0, account:0};

    //for contact
    percentages.contact = getSinglePercentage(['phone', 'whatsapp', 'email'], profile);
    
    //for general
    percentages.general = getSinglePercentage(['name', 'age', 'sex', 'occupation', 'party'], profile);

    //for account info
    percentages.account = getSinglePercentage(['state', 'lga', 'ward', 'pollingUnit'], profile);

    return percentages;

}

function getSinglePercentage(group_array, profile){
    let filled = 0;
    for(const single of group_array){
        if(profile[single] && typeof(profile[single]) == 'string' && profile[single].trim() !== ""){
            filled++;
        }else if(typeof(profile[single]) == 'object' && profile[single]?.name){
            filled++;
        }
    }
    return Math.round(filled * 100 / group_array.length);
}

export function getImage(name){
    switch(name){
        case 'result': return "https://media.istockphoto.com/id/1191511208/photo/old-paper-documents-in-the-archive.jpg?s=1024x1024&w=is&k=20&c=v1fXiy7ufJvd0Wbp6SrHjPhESKpPt_MoUCXwc5eN-rY=";
        case "vote_count": return "https://media.istockphoto.com/id/1194161847/photo/counting-ballot-papers-during-election.jpg?s=1024x1024&w=is&k=20&c=NX4dgZ5xzixZ9NBP8kZUr4_KnCXnjilSoU0Fcp9Cb_E=";
        case "voting": return "https://cdn.pixabay.com/photo/2024/06/10/08/33/ai-generated-8820202_1280.jpg";
        case "violence": return "https://cdn.pixabay.com/photo/2023/11/20/04/31/generative-ai-8400311_1280.jpg";
        case "photo": return "https://cdn.pixabay.com/photo/2022/09/16/13/07/generated-7458584_1280.jpg"
        default: return "https://cdn.pixabay.com/photo/2022/09/16/13/07/generated-7458584_1280.jpg"
    }
}

export function getElection(election, elections){
    const entry = elections.find((array_entry) => array_entry.name == election);
    return entry;
}

export function getStateId (state, states) {
    const entry = states.find((array_entry) => array_entry.name == state);
    return entry.id;
}

export function getLGAId(lga, lgas) {
    const entry = lgas.find((array_entry) => array_entry.name == lga);
    return entry.id;
}

export function getWardId (ward, wards) {
    const entry = wards.find((array_entry) => array_entry.name == ward);
    return entry.id;
}