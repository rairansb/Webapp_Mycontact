import {
  Container, InputSearchContainer, Header, ListContainer, Card,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

export default function Home() {
  return (
    <Container>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar Contato" />
      </InputSearchContainer>
      <Header>
        <strong>3 contatos</strong>
        <a href="/">Novo contato</a>
      </Header>
      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="arrow" />
          </button>

          <Card>
            <div className="info">
              <div className="contact-name">
                <strong>Rairan Barbosa</strong>
                <small>Instagram</small>
              </div>
              <span>rairandesbravador@gmail.com</span>
              <span>(73) 99999-9999</span>
            </div>
            <div className="actions">
              <a href="/">
                <img src={edit} alt="Edit" />
              </a>
              <button type="button">
                <img src={trash} alt="Trash" />
              </button>
            </div>
          </Card>
          <Card>
            <div className="info">
              <div className="contact-name">
                <strong>Rairan Barbosa</strong>
                <small>Instagram</small>
              </div>
              <span>rairandesbravador@gmail.com</span>
              <span>(73) 99999-9999</span>
            </div>
            <div className="actions">
              <a href="/">
                <img src={edit} alt="Edit" />
              </a>
              <button type="button">
                <img src={trash} alt="Trash" />
              </button>
            </div>
          </Card>
          <Card>
            <div className="info">
              <div className="contact-name">
                <strong>Rairan Barbosa</strong>
                <small>Instagram</small>
              </div>
              <span>rairandesbravador@gmail.com</span>
              <span>(73) 99999-9999</span>
            </div>
            <div className="actions">
              <a href="/">
                <img src={edit} alt="Edit" />
              </a>
              <button type="button">
                <img src={trash} alt="Trash" />
              </button>
            </div>
          </Card>
        </header>
      </ListContainer>
    </Container>
  );
}
