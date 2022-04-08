export const checkFileValidation = (file?: File) => {
  if (!file?.size) {
    alert("파일이 없습니다.")
    return false;
  }

  // 5mb보다 크다면
  if(file.size > 5 * 1204 * 1204) {
    alert("파일 용량이 큽니다.(제한 5MB)")
    return false;
  }

  // 파일 확장자 검증하기.
  if(!file.type.includes("jpeg") && !file.type.includes("png")) {
    alert("jpeg 파일 또는 png 파일만 업로드 가능합니다")
    return false;
  }

  return true;
}