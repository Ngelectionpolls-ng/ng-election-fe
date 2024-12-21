export const constants = {
    EYEWITNESS: 'iWitness',
    AGENT: 'pollingUnitAgent',
    DASHBOARD: "Dashboard", 
    EYEWITNESS_REPORT: "Eyewitness Report",
    ELECTION_MAP: 'Election Map', 
    NEWS: 'News', 
    MEDIA_GALLERY: 'Media Gallery',
    PROFILE: "My Account Info"
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