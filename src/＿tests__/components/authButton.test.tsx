import { render, screen } from "@testing-library/react";
import AuthButton from "../../components/AuthButton";
import '@testing-library/jest-dom'

test("Button displays correct content", async () => {
  // 準備
  const loginText = "登入";
  const isLogin = true
  const name = "小美"
  
  // 執行
  render(<AuthButton isLogin={isLogin} name={name}/>);

  // 驗證
  if(isLogin){
    // 如果是登入狀態，按鈕會顯示名字
    expect(screen.getByRole("button")).toHaveTextContent(name);
    expect(screen.getByRole("button")).not.toHaveTextContent(loginText);
  } else {
    // 如果非登入狀態，按鈕顯示「登入」字樣
    expect(screen.getByRole("button")).toHaveTextContent(loginText);
    expect(screen.getByRole("button")).not.toHaveTextContent(name);
  }
});
