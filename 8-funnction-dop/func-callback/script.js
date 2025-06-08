function showSuccessMessage(msg) {
  console.log(msg);
}

function showErrorMessage(msg) {
  console.error(msg);
}

function checkTextOnErrorSymbol(text, errorSymbol, success, error) {
  let hasError = false;
  [...text].forEach((sym, idx) => {
    if (sym === errorSymbol) {
      error(`Найден запрещенный символ ${errorSymbol} под индексом ${idx}`);
      !hasError && (hasError = !hasError);
    }
  });
  !hasError && success('В данном тексте нет запрещенных символов');
}

const text = 'Привет! Как дела! Давно мы с тобой не виделись.';
checkTextOnErrorSymbol(text, 'а', showSuccessMessage, showErrorMessage);
