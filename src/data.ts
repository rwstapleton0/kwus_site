

export function sendEmailAddress(email: string | undefined, tncs: boolean) {
    if (email === "" || email === undefined) {
        return
    }
    let data = {
        email: email,
        tncs: tncs
    }
    fetch("https://shy-surf-6739.rwstapleton0.workers.dev", {
        method: "POST",
        body: JSON.stringify(data),
        mode: 'cors',
        headers: {
            "Content-Type": "application/json"
        }, 
    }).then((res: Response) => console.log(res));
}
