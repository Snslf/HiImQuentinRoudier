import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

function EntomologyTree() {
  return (
    <div class ="App">
      <br/>
      <br/>
      <h3> Below you can find my favorite insects, don't hesitate to click on them </h3>
      <br/>
      <ul class="tree ">
        <li> <a href="https://en.wikipedia.org/wiki/Insect">Insecta</a>
          <ul>
            <li> <a href="https://en.wikipedia.org/wiki/Phasmatodea">Phasmatodea</a>
              <ul>
                <li> <a href="https://en.wikipedia.org/wiki/Phasmatidae">Phasmatidae</a>
                  <ul>
                    <li><a href="https://en.wikipedia.org/wiki/Extatosoma_tiaratum">Extatosoma Tiaratum</a></li>
                  </ul>
                </li>
                <li> <a href="https://en.wikipedia.org/wiki/Phylliidae" >Phyllidae</a>
                  <ul>
                    <li><a href="https://en.wikipedia.org/wiki/Phyllium_giganteum">Phyllium giganteum</a></li>
                    <li><a href="https://en.wikipedia.org/wiki/Phyllium_bioculatum">Phyllium Bioculatum</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li> <a href="https://en.wikipedia.org/wiki/Beetle">Coleoptera</a>
              <ul>
                <li> <a href="https://en.wikipedia.org/wiki/Scarabaeidae">Scarabaeidae</a>
                  <ul>
                    <li><a href="https://en.wikipedia.org/wiki/Goliathus_orientalis">Goliathus Orientalis</a></li>
                  </ul>
                </li>
                <li> <a href="https://en.wikipedia.org/wiki/Longhorn_beetle">Cerambycidae</a>
                  <ul>
                    <li><a href="https://en.wikipedia.org/wiki/Harlequin_beetle">Acrocinus longimanus</a></li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default EntomologyTree;
