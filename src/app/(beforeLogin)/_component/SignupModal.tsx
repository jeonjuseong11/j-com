"use client";

import style from "./signup.module.css";
import { useRouter } from "next/navigation";
import { ChangeEventHandler, FormEventHandler, useState } from "react";

export default function SignupModal() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string>(""); // 이미지 미리보기 URL

  const router = useRouter();

  const onClickClose = () => {
    router.back();
  };

  const onChangeId: ChangeEventHandler<HTMLInputElement> = (e) => setId(e.target.value);
  const onChangePassword: ChangeEventHandler<HTMLInputElement> = (e) => setPassword(e.target.value);
  const onChangeNickname: ChangeEventHandler<HTMLInputElement> = (e) => setNickname(e.target.value);

  // 이미지 파일 선택 및 미리보기 생성
  const onChangeImageFile: ChangeEventHandler<HTMLInputElement> = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);

      // FileReader로 미리보기 URL 생성
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit: FormEventHandler = async (e) => {
    e.preventDefault();

    // [중요] 이미지를 포함한 전송은 보통 FormData를 사용해야 합니다.
    // 백엔드가 JSON으로 이미지를 받지 않는다면 아래 주석 처리된 FormData 방식을 사용하세요.

    /* -- FormData 방식 (추천) --
        const formData = new FormData();
        formData.append('id', id);
        formData.append('password', password);
        formData.append('nickname', nickname);
        if (imageFile) {
            formData.append('image', imageFile);
        }

        await fetch('http://localhost:9090/api/users', {
             method: 'POST',
             body: formData, // 헤더에 Content-Type 설정 금지 (브라우저가 자동 설정)
        });
        */

    // -- 기존 JSON 방식 (이미지 파일 전송 불가, 텍스트만 전송됨) --
    try {
      const response = await fetch("http://localhost:9090/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
          nickname,
          password,
          // image: imageFile, // 파일 객체는 JSON으로 전송되지 않습니다.
        }),
      });

      if (response.ok) {
        router.replace("/home");
      } else {
        console.error("회원가입 실패");
      }
    } catch (err) {
      console.error(err);
    }
  };

  // 필수 입력값이 채워졌는지 확인 (버튼 활성화 용도)
  const isFormValid = id && password && nickname;

  return (
    <div className={style.modalBackground}>
      <div className={style.modal}>
        <div className={style.modalHeader}>
          <button className={style.closeButton} onClick={onClickClose}>
            <svg width={24} viewBox="0 0 24 24" aria-hidden="true">
              <g>
                <path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path>
              </g>
            </svg>
          </button>
          <div>계정을 생성하세요</div>
        </div>

        <form onSubmit={onSubmit}>
          <div className={style.modalBody}>
            {/* --- 프로필 이미지 업로드 영역 --- */}
            <div className={style.profileUploadContainer}>
              <label htmlFor="profileImgInput" className={style.uploadLabel}>
                <div className={style.imagePreview}>
                  {previewImage ? (
                    <img src={previewImage} alt="미리보기" className={style.previewImg} />
                  ) : (
                    /* 기본 유저 아이콘 */
                    <svg
                      width={50}
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      fill="rgb(139, 152, 165)"
                    >
                      <g>
                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0 1 12.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"></path>
                      </g>
                    </svg>
                  )}
                  {/* 카메라 오버레이 아이콘 */}
                  <div className={style.cameraOverlay}>
                    <svg width={30} viewBox="0 0 24 24" aria-hidden="true" fill="white">
                      <g>
                        <path d="M19.75 23h-15.5c-1.381 0-2.5-1.119-2.5-2.5V7.5c0-1.381 1.119-2.5 2.5-2.5h1.723l1.5-4h9.054l1.5 4h1.723c1.381 0 2.5 1.119 2.5 2.5v13c0 1.381-1.119 2.5-2.5 2.5zM4.25 7c-.276 0-.5.224-.5.5v13c0 .276.224.5.5.5h15.5c.276 0 .5-.224.5-.5V7.5c0-.276-.224-.5-.5-.5H17.5l-1.5-4h-8l-1.5 4H4.25z"></path>
                        <path d="M12 17c-2.761 0-5-2.239-5-5s2.239-5 5-5 5 2.239 5 5-2.239 5-5 5zm0-8c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3z"></path>
                      </g>
                    </svg>
                  </div>
                </div>
                <input
                  id="profileImgInput"
                  className={style.hiddenFileInput}
                  type="file"
                  accept="image/*"
                  onChange={onChangeImageFile}
                />
              </label>
            </div>

            {/* --- 입력창 영역 --- */}
            <div className={style.inputDiv}>
              <label className={style.inputLabel} htmlFor="id">
                아이디
              </label>
              <input
                id="id"
                className={style.input}
                type="text"
                value={id}
                onChange={onChangeId}
                required
              />
            </div>
            <div className={style.inputDiv}>
              <label className={style.inputLabel} htmlFor="name">
                닉네임
              </label>
              <input
                id="name"
                className={style.input}
                type="text"
                value={nickname}
                onChange={onChangeNickname}
                required
              />
            </div>
            <div className={style.inputDiv}>
              <label className={style.inputLabel} htmlFor="password">
                비밀번호
              </label>
              <input
                id="password"
                className={style.input}
                type="password"
                value={password}
                onChange={onChangePassword}
                required
              />
            </div>
          </div>

          <div className={style.modalFooter}>
            <button className={style.actionButton} disabled={!isFormValid}>
              가입하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
