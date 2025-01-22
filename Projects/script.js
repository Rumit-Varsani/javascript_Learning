const url = "https://api.github.com/users/Rumit-Varsani"
const xhr = new XMLHttpRequest();
xhr.open("GET",url);
xhr.onreadystatechange = function(){
    if(xhr.readyState===4)
    {
        const data = JSON.parse(this.responseText);
        const names = document.getElementById("username");
        const fc = document.getElementById("follower-count");
        const avatar = document.getElementById("profile-photo");
        names.innerHTML = `${data.name}`;
        fc.innerHTML = `${data.following}`;
        avatar.src = data.avatar_url;
    }
}
xhr.send();