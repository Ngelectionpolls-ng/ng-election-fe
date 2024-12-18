export const EYEWITNESS = 'iWitness';
export const AGENT = 'pollingUnitAgent';

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


export function logout(){
    localStorage.clear();
    window.location = '/auth/login';
}