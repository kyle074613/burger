$(function () {
    $(".devourBurger").on("click", function (event) {
        const id = $(this).data("burgerid");

        console.log(id)

        $.ajax("api/burgers/" + id, {
            type: "PUT"
        }).then(function () {
            console.log(`Burger with id ${id} devoured.`);

            location.reload();
        });
    });

    $(".burgerInput").on("submit", function (event) {
        event.preventDefault();

        const newBurger = {
            name: $(".newBurger").val().trim()
        };

        if (newBurger.name != '') {
            $.ajax("/api/burgers", {
                type: "POST",
                data: newBurger
            }).then(function () {
                console.log(`${newBurger} added.`);

                location.reload();
            });
        };
    });
})