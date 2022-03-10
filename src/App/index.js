import { MainContainer } from '../Container/main';
import { Section } from '../ComponentsFunction/Section';
import { Carousel } from '../ComponentsFunction/Carousel';
import ClassCarousel from '../ComponentsClass/ClassCarousel';
import { Form } from '../Components/Form';
import { Garage } from '../Components/List';
import { CardItem } from '../Components/CardItem';
import { StateFunction } from '../Components/StateExample';

function App() {
  return (
    <MainContainer>
      <Section componentType="Functional Component Example">
        <Carousel>
          <Form />
          <StateFunction/>
          <p style={{ fontWeight: "bold" }}>Rock ✊</p>
          <Garage />
          <p>Scizors ✌️</p>
          <CardItem />
          <p>Paper ✋</p>
        </Carousel>
      </Section>

      <Section componentType="Class Component Example">
        <ClassCarousel>
          <Garage />
          <p style={{ fontWeight: "bold" }}>Rock ✊</p>
          <CardItem />
          <p>Scizors ✌️</p>
          <Form />
          <p>Paper ✋</p>
        </ClassCarousel>
      </Section>
      
    </MainContainer>
  );
}

export default App;
