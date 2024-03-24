import React from "react";

export default function TechStacks() {
  return (
    <div id="skillsDiv">
      <div id="techTitle" data-aos="fade-up" class="aos-init aos-animate">
        <h3>Technologies I've Worked With</h3>
      </div>
      <div
        id="skillsMain"
        style={{ marginLeft: "20px", justifyContent: "center" }}
      >
        <div
          class="techDiv aos-init aos-animate"
          id="frontend"
          data-aos="fade-up"
        >
          <div class="techDivTitle">Frontend</div>
          <div class="tech tooltip">
            <img src="/tech-stacks/frontend/react_icon.png" alt="React"></img>
            <span class="tooltiptext">React</span>
          </div>
          <div class="tech tooltip">
            <img src="/tech-stacks/frontend/redux_icon.png" alt="Redux"></img>
            <span class="tooltiptext">Redux</span>
          </div>
          <div class="tech tooltip">
            <img src="/tech-stacks/frontend/html.png" alt="HTML"></img>
            <span class="tooltiptext">HTML</span>
          </div>
          <div class="tech tooltip">
            <img src="/tech-stacks/frontend/css_icon.png" alt="CSS"></img>
            <span class="tooltiptext">CSS</span>
          </div>
          <div class="tech tooltip">
            <img
              src="/tech-stacks/frontend/bootstrap_icon.png"
              alt="Bootstrap"
            ></img>
            <span class="tooltiptext">Bootstrap</span>
          </div>
          <div class="tech tooltip">
            <img
              style={{ width: "70px" }}
              src="/tech-stacks/frontend/materialUi.png"
              alt="Material UI"
            ></img>
            <span class="tooltiptext">Material UI</span>
          </div>
          <div class="tech tooltip">
            <img
              src="/tech-stacks/frontend/tailwind_icon.png"
              alt="Tailwind"
            ></img>
            <span class="tooltiptext">Tailwind</span>
          </div>
        </div>

        <div
          class="techDiv aos-init aos-animate"
          id="backend"
          data-aos="fade-up"
        >
          <div class="techDivTitle">Backend</div>
          <div class="tech tooltip">
            <img src="/tech-stacks/backend/nodejs_icon.png" alt="Node.js"></img>
            <span class="tooltiptext">Node.js</span>
          </div>
          <div class="tech tooltip">
            <img
              style={{ width: "70px" }}
              src="/tech-stacks/backend/express_icon.png"
              alt="Express"
            ></img>
            <span class="tooltiptext">Express</span>
          </div>
          <div class="tech tooltip">
            <img
              src="/tech-stacks/backend/spring_boot_icon.png"
              alt="spring boot"
            ></img>
            <span class="tooltiptext">Spring Boot</span>
          </div>
          <div class="tech tooltip">
            <img src="/tech-stacks/backend/ruby_icon.png" alt="Rubu"></img>
            <span class="tooltiptext">Ruby</span>
          </div>
          <div class="tech tooltip">
            <img
              style={{ width: "70px" }}
              src="/tech-stacks/backend/nestJs.png"
              alt="NestJs"
            ></img>
            <span class="tooltiptext">NestJs</span>
          </div>
          <div class="tech tooltip">
            <img
              src="/tech-stacks/backend/postgresql_icon.png"
              alt="PostgreSQL"
            ></img>
            <span class="tooltiptext">PostgreSQL</span>
          </div>
          <div class="tech tooltip">
            <img
              src="/tech-stacks/backend/mongodb_programming_icon.png"
              alt="MongoDB"
            ></img>
            <span class="tooltiptext">MongoDB</span>
          </div>
          <div class="tech tooltip">
            <img src="/tech-stacks/backend/mysql_icon.png" alt="MySQL"></img>
            <span class="tooltiptext">MySQL</span>
          </div>
        </div>

        <div
          class="techDiv aos-init aos-animate"
          id="devops"
          data-aos="fade-up"
        >
          <div class="techDivTitle">Tools/Technologies</div>
          <div class="tech tooltip">
            <img src="/tech-stacks/tools/git.png" alt="Git"></img>
            <span class="tooltiptext">Git</span>
          </div>
          <div class="tech tooltip">
            <img src="/tech-stacks/tools/docker.png" alt="Docker"></img>
            <span class="tooltiptext">Docker</span>
          </div>
          <div class="tech tooltip">
            <img src="/tech-stacks/tools/kubernetes.png" alt="Kubernetes"></img>
            <span class="tooltiptext">Kubernetes</span>
          </div>
          <div class="tech tooltip">
            <img src="/tech-stacks/tools/jest_icon.png" alt="jest"></img>
            <span class="tooltiptext">jest</span>
          </div>
          <div class="tech tooltip">
            <img src="/tech-stacks/tools/aws_icon.png" alt="Aws"></img>
            <span class="tooltiptext">Aws</span>
          </div>
        </div>

        <div
          class="techDiv aos-init aos-animate"
          id="languages"
          data-aos="fade-up"
        >
          <div class="techDivTitle">Languages</div>
          <div class="tech tooltip">
            <img
              src="/tech-stacks/frontend/javascript_icon.png"
              alt="Javascript"
            ></img>
            <span class="tooltiptext">Javascript</span>
          </div>
          <div class="tech tooltip">
            <img src="/tech-stacks/languages/cpp.png" alt="C++"></img>
            <span class="tooltiptext">C++</span>
          </div>
          <div class="tech tooltip">
            <img src="/tech-stacks/languages/c.png" alt="C"></img>
            <span class="tooltiptext">C</span>
          </div>
          <div class="tech tooltip">
            <img src="/tech-stacks/languages/java.png" alt="Java"></img>
            <span class="tooltiptext">Java</span>
          </div>
          <div class="tech tooltip">
            <img
              src="/tech-stacks/languages/python_icon.png"
              alt="Python"
            ></img>
            <span class="tooltiptext">Python</span>
          </div>
        </div>

        <div class="techDiv aos-init aos-animate" id="tools" data-aos="fade-up">
          <div class="techDivTitle">Machine Learning</div>
          <div class="tech tooltip">
            <img
              style={{ width: "70px" }}
              src="/tech-stacks/machine-learning/scikit.png"
              alt="Sci-kit learn"
            ></img>
            <span class="tooltiptext">Sci-kit learn</span>
          </div>
          <div class="tech tooltip">
            <img
              style={{ width: "70px" }}
              src="/tech-stacks/machine-learning/tensor.png"
              alt="TensorFlow"
            ></img>
            <span class="tooltiptext">TensorFlow</span>
          </div>
          <div class="tech tooltip">
            <img
              style={{ width: "70px" }}
              src="/tech-stacks/machine-learning/keras.png"
              alt="Keras"
            ></img>
            <span class="tooltiptext">Keras</span>
          </div>
          <div class="tech tooltip">
            <img
              style={{ width: "70px" }}
              src="/tech-stacks/machine-learning/pYtorch.png"
              alt="PyTorch"
            ></img>
            <span class="tooltiptext">Pytorch</span>
          </div>
          <div class="tech tooltip">
            <img
              style={{ width: "70px" }}
              src="/tech-stacks/machine-learning/pandas.png"
              alt="Pandas"
            ></img>
            <span class="tooltiptext">Pandas</span>
          </div>
          <div class="tech tooltip">
            <img
              style={{ width: "70px" }}
              src="/tech-stacks/machine-learning/numpy.png"
              alt="Numpy"
            ></img>
            <span class="tooltiptext">Numpy</span>
          </div>
          <div class="tech tooltip">
            <img
              style={{ width: "70px" }}
              src="/tech-stacks/machine-learning/matplotlib.png"
              alt="matplotlib"
            ></img>
            <span class="tooltiptext">matplotlib</span>
          </div>
        </div>
      </div>
    </div>
  );
}
