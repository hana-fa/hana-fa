fetch("posts.json")
.then(response => response.json())
.then(posts => {

    let list = "";

    posts.forEach(post => {

        list += `
        <tr>
            <td>${post.id}</td>

            <td class="title">
                <a href="view.html?id=${post.id}">
${post.title}
</a>
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
