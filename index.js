function isRegister(reg_no) {
    const regex = RegExp('^[А-Я|Ө|Ү]{2}\\d{8}$')
    return regex.test(reg_no)
}

function getBirth(reg_no) {
	if (isRegister(reg_no)) {
		let year, month, day = ''
		if (reg_no[3] == 2 || reg_no[3] == 3) {
			year = '20' + reg_no.substr(2, 2)
			month = ('19' + reg_no.substr(4, 2)) - 20
		} else {
			year = '19' + reg_no.substr(2, 2)
			month = reg_no.substr(4, 2)
		}
		day = reg_no.substr(6, 2)
	
		return year + '-' + month + '-' + day
	} else return 'Регистрийн дугаар тохирохгүй байна'
}

function getGender(reg_no) {
	if (isRegister(reg_no)) {
		return reg_no.slice(8, -1) % 2 ? 'Эр' : 'Эм'
	} else return 'Регистрийн дугаар тохирохгүй байна'
}

function getBirthLocation(reg_no) {
    char2location = {
        'А': 'Архангай',
        'Б': 'Баян-Өлгий',
        'В': 'Баянхонгор',
        'Г': 'Булган',
        'Д': 'Говь-Алтай',
        'Е': 'Дорноговь',
        'Ж': 'Дорнод',
        'З': 'Дундговь',
        'И': 'Завхан',
        'Й': 'Өвөрхангай',
        'К': 'Өмнөговь',
        'Л': 'Сүхбаатар',
        'М': 'Сэлэнгэ',
        'Н': 'Төв',
        'О': 'Увс',
        'П': 'Ховд',
        'Р': 'Хөвсгөл',
        'С': 'Хэнтий',
        'Т': 'Дархан-Уул',
        'Ф': 'Орхон',
        'Х': 'Говьсүмбэр',
        'У': 'Улаанбаатар',
        'Ч': 'Улаанбаатар'
	}
	if (isRegister(reg_no)) {
		return char2location[reg_no[0]] ? char2location[reg_no[0]] : 'Тодорхойгүй'
	} else return 'Регистрийн дугаар тохирохгүй байна'
}

function getAge(reg_no) {
	if (isRegister(reg_no)) {
		var today = new Date()
		var birthDate = new Date(getBirth(reg_no))
		var age = today.getFullYear() - birthDate.getFullYear()
		var m = today.getMonth() - birthDate.getMonth()
		if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
			age--
		}
		return age
	} else return 'Регистрийн дугаар тохирохгүй байна'
}

module.exports = { isRegister, getBirth, getGender, getBirthLocation, getAge }