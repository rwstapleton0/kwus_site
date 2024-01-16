

export function sendEmailAddress(email: string | undefined, tncs: boolean) {
    if (email === "" || email === undefined) {
        return
    }
    let data = {
        email: email,
        tncs: tncs
    }
    // fetch("http://localhost:8787/", {
    fetch("https://shy-surf-6739.rwstapleton0.workers.dev", {
        method: "POST",
        body: JSON.stringify(data),
        mode: 'cors',
        headers: {
            "Content-Type": "application/json"
        }, 
    }).then((res: Response) => console.log(res));
}

const validateEmail = (email: string) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};
