$ = (a)=>{return document.querySelector(a)}
$$=(a)=>{return document.querySelectorAll(a)}
function start() {
    getvent()
}
start()

L = [
    {name:"Đào Văn Hưng",sub:"Poseidon",like:"Chơi Game",birth:"25/04/2007",quest:"Code và Remake",his:"Cảm xúc của anh ấy mạnh mẽ như đại dương, lúc yên bình, lúc dữ dội. Một khi tức giận, anh có thể nhấn chìm mọi thứ. Nhưng sâu thẳm bên trong, anh vẫn là người bảo vệ, như thần Poseidon luôn bảo vệ biển cả và những người thân yêu."},
    {name:"Phạm Tuấn Khang",sub:"Ares",like:"Đá Bóng",birth:"09/10/2007",quest:"Coming soon!",his:"Anh ấy không bao giờ lùi bước trước khó khăn, luôn là người đầu tiên xông pha. Tinh thần chiến đấu sục sôi, không ngại thử thách. Giống như thần chiến tranh Ares, anh có sức mạnh, lòng can đảm và một ngọn lửa không bao giờ tắt."},
    {name:"Vũ Phú Hưng",sub:"Hades",like:"Xem Phim, Đọc sách",birth:"19/10/2007",quest:"Add Data website",his:"Anh ấy ít nói, ánh mắt luôn sâu thẳm như bóng tối của địa ngục. Nhưng đừng nhầm tưởng sự lạnh lùng đó là vô cảm. Như Hades, anh luôn bảo vệ những gì thuộc về mình, trung thành và mạnh mẽ một cách đáng sợ."},
    {name:"Nguyễn Nam Khánh",sub:"Zeus",like:"Ăn như lợn",birth:"08/07/2007",quest:"Coming soon!",his:"Anh ấy luôn là người đưa ra quyết định, mạnh mẽ và đầy uy lực. Giọng nói vang dội như sấm, ánh mắt sắc bén khiến ai cũng nể phục. Dù nghiêm khắc, anh vẫn luôn bảo vệ bạn bè như thần Zeus bảo vệ đỉnh Olympus."},
    {name:"Đinh Ngọc Huyền",sub:"Aphrodite",like:"Thích ăn và xem conan.",birth:"11/05/2007",quest:"Designer",his:"Cô ấy không chỉ đẹp mà còn có sức hút kỳ lạ. Dù không cần cố gắng, ai cũng bị cuốn vào sự duyên dáng của cô. Giống như nữ thần tình yêu Aphrodite, cô có thể làm trái tim mọi người rung động chỉ bằng một nụ cười."},
    {name:"Nguyễn Tuấn Linh",sub:"Athena",like:"Nghiện Game",birth:"14/11/2007",quest:"Coming soon!",his:"Cô ấy thông minh, sắc sảo, luôn có những kế hoạch hoàn hảo. Không ai có thể đánh bại cô trong tranh luận. Mỗi lời nói đều chứa đựng sự khôn ngoan như nữ thần Athena, vừa thông thái vừa mạnh mẽ trên chiến trường lẫn cuộc sống."},
    {name:"Bùi Hưng",sub:"Hermes",like:"Đi lính",birth:"14/12/2007",quest:"Coming soon!",his:"Anh ấy luôn tràn đầy năng lượng, nhanh nhẹn như gió, không bao giờ chịu đứng yên. Luôn tìm ra lối thoát trong mọi tình huống, anh láu cá nhưng tốt bụng. Giống thần Hermes, anh là kẻ đưa tin sắc sảo, luôn biết mọi chuyện trước tiên."},
    {name:"Nguyễn Thị Liên",sub:"Artemis",like:"Nghe nhạc và xem phim",birth:"17/06/2007",quest:"Coming soon!",his:"Cô ấy yêu sự tự do, mạnh mẽ và không ai có thể trói buộc. Như nữ thần săn bắn Artemis, cô không sợ thách thức, sống theo cách riêng của mình. Trong mắt cô luôn có ánh sáng của mặt trăng và sự bí ẩn không ai có thể chạm tới."},
]



function getvent() {
    $$(".items_links").forEach((i)=>{
        i.addEventListener("click",(e)=>{selectmem(e)})
    })
}
function selectmem(e) {
    if (!!e.target.getAttribute("stt")) {
        Eactive = e.target
    } else {Eactive = e.target.parentElement}
    if (Eactive.getAttribute("class").includes("list-active")) {
        return
    } else {
        $(".list-active").classList.toggle("list-active")
        Eactive.classList.toggle("list-active")
        loadmem()
    }
}
function loadmem() {
    Eactive = $(".list-active")
    id = Number(Eactive.getAttribute("stt"))
    if_id = L[id-1]
    $(".if_img_name").innerHTML = if_id.name
    $(".if_img_sub").innerHTML = if_id.sub
    $(".if_img").src = `./assets/img/m${id}.jpg`
    $(".a1").innerHTML = if_id.like
    $(".a2").innerHTML = if_id.birth
    $(".a4").innerHTML = if_id.quest
    $(".history").innerHTML = if_id.his
}