fetch("posts.json")
.then(response => response.json())
.then(posts => {

    let list = "";

    posts.forEach(post => {

        list += `
        <tr>
            <td>${post.id}</td>

            <td class="title">
                ${post.title}
            </td>

            <td>
                ${post.writer}
            </td>

            <td>
                ${post.date}
            </td>

        </tr>
        `;

    });


    document.getElementById("post-list").innerHTML = list;

});
