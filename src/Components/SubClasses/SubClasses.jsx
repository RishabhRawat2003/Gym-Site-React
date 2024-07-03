import React from 'react'
import Pilates from './Pilates';
import Aerobic from './Aerobic'
import CrossFit from './CrossFit'
import EnergyDance from './EnergyDance'
import Yoga from './Yoga'
import Boxing from './Boxing'

import { useParams } from 'react-router-dom';

function SubClasses() {
    let { id } = useParams();
    if(id==='pilates'){
        return <Pilates />
    }
    if(id==='aerobicTraining'){
        return <Aerobic />
    }
    if(id==='crossFitworkout'){
        return <CrossFit />
    }
    if(id==='yoga'){
        return <Yoga />
    }
    if(id==='boxing'){
        return <Boxing />
    }
    if(id==='energyDance'){
        return <EnergyDance />
    }
}

export default SubClasses