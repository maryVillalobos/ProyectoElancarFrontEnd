import { React, useState } from 'react';
import {
    Container,
    Card,
    CardSubtitle,
    CardBody,
    CardTitle,
    CardText,
    CardLink,
    FormGroup,
    Input,
    Label
} from 'reactstrap'; // Importa Container de Reactstrap para estructurar el layout

const Productos = ({ Titulo, Descripcion, imagen = "https://picsum.photos/318/180" }) => {
    const [checked, setChecked] = useState(false);

    const handleCheckboxChange = () => {
        setChecked(!checked);
    };
    return (
        <>
            <div className="col-md-4 col-sd-12">
                <Card
                    style={{
                        width: "100%"
                    }}
                >
                    <CardBody>
                        <CardTitle tag="h5">
                            {Titulo}
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6">
                            <FormGroup check >
                                <Input
                                    type="checkbox"
                                    checked={checked}
                                    className='checkbox-wrapper-46'
                                    onChange={handleCheckboxChange}
                                />
                                <Label for="flexCheckDefault" check>
                                    Comparar
                                </Label>
                            </FormGroup>

                        </CardSubtitle>
                    </CardBody>
                    <img
                        alt="Card cap"
                        src={imagen}
                        height="300rem"
                        width="100%"
                    />
                    <CardBody>
                        <CardText>
                            {Descripcion}
                        </CardText>
                        <CardLink href="#">
                            Card Link
                        </CardLink>
                        <CardLink href="#">
                            Another Link
                        </CardLink>
                    </CardBody>
                </Card>
            </div>
        </>
    );
};

export default Productos;
