import React from 'react';
import '../Assets/Style/App.css';
import '../Assets/Style/Universite.css';

import { Row,Col } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';



function Universite() {
    return (<>
        <Row className="header">
            <Col>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <h1 className="title">Nom de l'universite</h1>
                <h2 className="subtitle">Ville, Pays, Continent</h2>
                <div></div>
            </Col>
        </Row>
        <Row className="presGen">
            <Col sm="6" xs="12">
                TEst
            </Col>
            <Col sm="6" xs="12">
                <h3 className="avis">Les avis des étudiants</h3>
                <Row>
                    <Col sm="6">
                        <div className="noteGlobale">
                            Note globale
                        </div>
                    </Col>
                    <Col sm="6">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />

                        <FontAwesomeIcon icon={faStarEmpty} />

                    </Col>
                </Row>
            </Col>
        </Row>
    </>);
}

export default Universite;