const getGitHubInfo = function () {
    var username = document.getElementById('usuario-github').value
    var url = 'https://api.github.com/users/' + username;

    var ajax = new XMLHttpRequest();

    ajax.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200){
            let ajax = JSON.parse(this.responseText);
            let avatar = document.getElementsByClassName('avatar')
            let strong = document.querySelectorAll('strong')
            let li = document.querySelectorAll('li')

            avatar[0].href = url.replace("api.", "").replace("users/", "")
            avatar[0].firstElementChild.src = ajax.avatar_url

            li[0].firstElementChild.href = ajax.repos_url.replace("api.", "").replace("users/", "").replace("repos", "?tab=repositories")
            strong[0].innerHTML = ajax.public_repos

            li[1].firstElementChild.href = ajax.gists_url.replace("api", "gist").replace("users/", "").replace("gists{/gist_id}", "")
            strong[1].innerHTML = ajax.public_gists

            li[2].firstElementChild.href = ajax.followers_url.replace("api.", "").replace("users/", "")
            strong[2].innerHTML = ajax.followers

            console.log(ajax)
        }
    };

    ajax.open('GET', url, true);
    ajax.send();

};


let button = document.getElementById('buscar-github')
button.addEventListener('click', getGitHubInfo)