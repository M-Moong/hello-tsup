//# 요구사항은 아래와 같은 보조 목표의 총 합이 되었습니다.
// boolean 은 빈 값이 아니다.
// null 은 빈 값으로 처리한다
// undefined 는 빈 값으로 처리한다
// number 는 빈 값이 아니다.
// string의 길이가 0 이면 빈 값으로 처리한다
// symbol 은 빈 값이 아니다.
// 배열의 길이가 0이면 빈 값으로 처리한다
// 객체에 프로퍼티가 없으면 빈 값으로 처리한다.

export const isEmpty = (value: any) => {
	// boolean은 빈 값이 아니다.
	if (typeof value === 'boolean') {
		return false
	}

	return true
}
