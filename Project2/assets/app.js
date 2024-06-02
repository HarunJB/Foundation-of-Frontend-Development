$(document).ready(function () {
  toastr.options = {
    closeButton: true,
    progressBar: true,
    positionClass: "toast-top-right",
    timeOut: "5000",
  };

  $(".success-btn").click(function () {
    toastr.success("This is a success message!");
  });

  $(".error-btn").click(function () {
    toastr.error("This is an error message!");
  });

  $("#themeSwitch").click(function () {
    $("body").toggleClass("dark-theme");
    var icon = $(this).find("i");
    icon.toggleClass("fa-moon fa-sun");
    s;
  });

  function openModal(imageSrc, captionText) {
    const modal = $("#myModal");
    const modalImg = $("#modalImage");
    const caption = $("#caption");

    modal.css("display", "block");
    modalImg.attr("src", imageSrc);
    caption.text(captionText);
  }

  function closeModal() {
    const modal = $("#myModal");
    modal.css("display", "none");
  }

  $(".project-image").click(function () {
    var imageSrc = $(this).attr("src");
    var captionText = $(this).prev(".w3-display-topleft").text();
    openModal(imageSrc, captionText);
  });

  $(".close").click(function () {
    closeModal();
  });

  $(window).click(function (event) {
    var modal = $("#myModal");
    if (event.target == modal[0]) {
      closeModal();
    }
  });

  $(".contact-btn").click(function () {
    $(this).closest("div").find(".contact-info").toggle();
  });

  $(".accordion-title").click(function () {
    $(".accordion-content").not($(this).next()).slideUp();

    $(this).next(".accordion-content").slideToggle();
  });

  $("#contactForm").submit(function (event) {
    event.preventDefault();

    var formData = {
      name: $("#name").val(),
      email: $("#email").val(),
      subject: $("#subject").val(),
      comment: $("#comment").val(),
    };

    console.log(formData);
    localStorage.setItem("formData", JSON.stringify(formData));

    toastr.success("Your message has been saved successfully!");

    $("#contactForm")[0].reset();
  });

  $.ajax({
    url: "projects.json",
    dataType: "json",
    success: function (data) {
      var projects = data.projects;
      var projectList = $("#projectList");

      projects.forEach(function (project) {
        var projectHtml = `
                    <div class="w3-col l3 m6 w3-margin-bottom">
                        <div class="w3-display-container">
                            <img class="project-image" src="${project.image}" alt="${project.name}" style="width:100%">
                            <div class="project-description w3-display-topleft w3-black w3-padding">${project.description}</div>
                        </div>
                        <h3>${project.name}</h3>
                        <p>${project.description}</p>
                    </div>
                `;
        projectList.append(projectHtml);
      });

      toastr.success("Projects loaded successfully!");
    },
    error: function () {
      toastr.error("Failed to load projects.");
    },
  });

  $.ajax({
    url: "reviews.json",
    dataType: "json",
    success: function (data) {
      var reviews = data.reviews;
      var reviewList = $("#reviewList");

      reviews.forEach(function (review) {
        var reviewHtml = `
                    <div class="w3-col l3 m6 w3-margin-bottom">
                        <div class="w3-card-4 w3-padding w3-margin">
                            <img class="w3-circle w3-margin-bottom" src="${review.image}" alt="${review.name}" style="width:50%">
                            <h3>${review.name}</h3>
                            <p>"${review.review}"</p>
                        </div>
                    </div>
                `;
        reviewList.append(reviewHtml);
      });

      toastr.success("Reviews loaded successfully!");
    },
    error: function () {
      toastr.error("Failed to load reviews.");
    },
  });
});
