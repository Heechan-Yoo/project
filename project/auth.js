// 게스트 로그인
const guestLoginDialog = document.getElementById("guestLoginDialog");
const openGuestLoginDialogButton = document.getElementById(
  "openGuestLoginDialog"
);
const openManagerLoginDialogButton = document.getElementById(
  "openManagerLoginDialog"
);
const guestLoginForm = document.getElementById("guest-login-form");
const guestUsername = document.getElementById("guest-username");
const guestPassword = document.getElementById("guest-password");
const welcomeMessage = document.createElement("div");

openGuestLoginDialogButton.addEventListener("click", () => {
  guestLoginDialog.showModal();
});

guestLoginForm.addEventListener("submit", (event) => {
  event.preventDefault(); // 기본 폼 제출 동작을 막습니다.
  guestLoginDialog.returnValue = "submit"; // 명시적으로 returnValue를 설정합니다.
  guestLoginDialog.close(); // 다이얼로그를 닫습니다.
  const username = guestUsername.value;
  const password = guestPassword.value;

  // 예시 토큰 생성 (실제로는 서버로부터 받아와야 합니다)
  const token = btoa(`${username}:${password}:true`); // base64 인코딩

  // URL에 토큰 추가
  const newUrl = new URL(window.location.href);
  newUrl.searchParams.set("token", token);
  window.history.pushState({}, "", newUrl);

  // 로그인 버튼 숨기기
  openGuestLoginDialogButton.style.display = "none";
  openManagerLoginDialogButton.style.display = "none";

  // 환영 메시지 추가
  welcomeMessage.textContent = `${username}님 환영합니다.`;
  document.querySelector(".header-content").appendChild(welcomeMessage);
});

guestLoginDialog.addEventListener("close", () => {
  // 다이얼로그가 닫힐 때 입력 필드를 초기화합니다.
  guestUsername.value = "";
  guestPassword.value = "";
});

function closeGuestLoginDialog() {
  guestLoginDialog.returnValue = ""; // returnValue를 초기화합니다.
  guestLoginDialog.close();
}

function openSignupPopup() {
  alert("회원가입 페이지로 이동합니다.");
}
