console.log("checking...");

anime({
    targets: "div.wellick.joanna",
    keyframes: [
        { translateX: 300 },
        { translateY: 200 },
        { translateX: 100 },
        { translateY: 200 },
    ],
    duration: 5000,
    rotate: "1turn",
    easing: "easeInOutExpo",
    loop: true,
});