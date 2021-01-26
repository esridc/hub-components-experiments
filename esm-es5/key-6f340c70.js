/**
 * Standardize key property of keyboard event (mostly for ie11)
 */
function getKey(key, dir) {
    var lookup = {
        Up: "ArrowUp",
        Down: "ArrowDown",
        Left: "ArrowLeft",
        Right: "ArrowRight",
        Spacebar: " ",
        Esc: "Escape"
    };
    var adjustedKey = lookup[key] || key;
    var isRTL = dir === "rtl";
    if (isRTL && adjustedKey === "ArrowLeft") {
        return "ArrowRight";
    }
    if (isRTL && adjustedKey === "ArrowRight") {
        return "ArrowLeft";
    }
    return adjustedKey;
}
export { getKey as g };
