function calcular() {
  try {

    let resultado = document.calculator.ans.value;

    if (resultado === 'Error' || resultado === '') {
      return; 
    }

    if (resultado.includes('**') || resultado.includes('//')) {
      throw new Error('Error');
    }

    document.calculator.ans.value = eval(resultado);
    
  }
  catch (error) {
    document.calculator.ans.value = 'Error';
  }
}