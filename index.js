async function makeIssue() {
    const token = process.env.GITHUB_TOKEN;
    const OWNER = "Joowon-Seo" // github 계정 이름
    const REPO = "github_power_action" // 현재 repository 이름
    const response = await fetch(`https://api.github.com/repos/${OWNER}/${REPO}/issues`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            title: "행운의 숫자", // 수정 가능 부분
            body: `$(Math.floor(Math.random() * 100) + 1)`, // 수정 가능 부분
        })
    });
    if(response.ok) {
        console.log("성공");
    } else {
        console.log("실패");
    }
}

makeIssue();