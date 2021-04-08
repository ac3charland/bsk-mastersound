import React from 'react'
import './bio.scss'

import {BIO_SECTION_ID} from '../../utils/constants'

const cb = 'bio'

const Bio = () => (
    <div id={BIO_SECTION_ID} tabIndex={-1} className={cb}>
        <p><span className={`${cb}__name`}>BRUCE KASPRZYK</span> is a lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan iaculis eros quis placerat. Donec lectus elit, porta sed fermentum et, hendrerit id ipsum. Aenean tristique enim ac diam convallis hendrerit. Integer et massa varius, ullamcorper sapien iaculis, posuere risus. Ut id scelerisque lectus. Duis at lectus dui. Praesent ornare sollicitudin leo ac faucibus. In condimentum laoreet eros, a lacinia ante imperdiet sed. Nulla ac lorem vel dolor lacinia ullamcorper. Donec tellus eros, consectetur in justo at, tincidunt pretium tortor. Vestibulum neque tortor, scelerisque non mauris molestie, pulvinar tincidunt est. Duis sed ullamcorper enim, sit amet mollis sapien. Ut porta diam sed efficitur dignissim.</p>
        <p>Vestibulum justo mauris, auctor eu sapien at, euismod cursus nisl. Fusce tristique orci eu ligula finibus, nec pulvinar nisl lobortis. Nam ultricies mattis fermentum. Nunc nulla diam, vestibulum ac nibh volutpat, aliquet elementum sapien. Praesent laoreet libero auctor ante fringilla blandit. Fusce rhoncus blandit magna, id rhoncus turpis bibendum a. Suspendisse laoreet diam non gravida aliquet. Nulla blandit est sed efficitur posuere. Praesent at nisl congue, malesuada erat sit amet, egestas lorem. Cras eget nunc neque. Maecenas risus tortor, ultrices nec elit convallis, facilisis congue eros. Curabitur lobortis non nunc non sollicitudin. Fusce metus orci, mollis vitae iaculis ac, lacinia ac sem. Integer hendrerit turpis turpis, eget iaculis nunc venenatis quis.</p>
    </div>
)

export default Bio
