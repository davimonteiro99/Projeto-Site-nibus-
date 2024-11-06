import './forms.css';

function Forms(){
return(<div className="body">
    <div className='titulo-form'><h1>Voos</h1></div>
 <div class="container-form">
  <form>
    <div className='main-form'>
    <div class="form-group">
      <label for="origem">Origem:</label>
      <input type="text" id="origem" name="origem" placeholder="Digite sua cidade de origem"></input>
    </div>
    <div class="form-group">
      <label for="destino">Destino:</label>
      <input type="text" id="destino" name="destino" placeholder="Digite sua cidade de destino"></input>
    </div>
    <div className='data-form'>
      <div class="form-group">
        <label for="ida">Data de ida:</label>
        <input className='date1' type="date" id="ida" name="ida"></input>
      </div>
      <div class="form-group">
        <label for="volta">Data de volta:</label>
        <input className='date2' type="date" id="volta" name="volta"></input>
      </div>
    </div>
   
    <div class="form-group">
      <label for="classe">Classe:</label>
      <select id="classe" name="classe">
        <option value="economica">Econômica</option>
        <option value="executiva">Executiva</option>
      </select>
    </div>
    <div className='botao-form'>
        <button className='botao'  type="submit">Buscar Passagens</button>
    </div>
    </div>
  </form>
  <div className='information_extra'>
    <p>Sua próxima aventura começa aqui</p>
    <a href="./">Veja nossas viagens</a>
    </div>
</div>
</div>)
}export default Forms; 