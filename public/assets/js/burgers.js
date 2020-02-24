$(function () {
    $(".devourBurger").on("click", function (event) {
        const id = $(this).data("burgerid");

        console.log(id)

        $.ajax("api/burgers/" + id, {
            type: "PUT"
        }).then(function () {
            console.log(`Burger with id ${id} devoured.`);

            location.reload();
        })
    })
})