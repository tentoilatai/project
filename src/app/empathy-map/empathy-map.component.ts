import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-empathy-map',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="container">
      <div class="header">
        <h1>Empathy Maps</h1>
        <p>Understanding the thoughts, feelings, and motivations of our users</p>
        <div class="nav-buttons">
          <a routerLink="/" class="nav-button">Personas</a>
          <a routerLink="/empathy-map" class="nav-button active">Empathy Maps</a>
          <a routerLink="/journey-map" class="nav-button">Journey Maps</a>
        </div>
      </div>

      <div class="empathy-maps-container">
        <!-- Empathy Map 1: Passion-Driven Volunteer -->
        <div class="empathy-map card">
          <div class="card-header">
            <div class="card-icon" style="background-color: rgba(76, 175, 80, 0.2); color: var(--primary-color);">
              <span class="material-symbols-outlined">volunteer_activism</span>
            </div>
            <div class="card-title">
              <h2>Passion-Driven Volunteer</h2>
              <p>Participates out of genuine interest</p>
            </div>
          </div>

          <div class="empathy-grid">
            <!-- Says -->
            <div class="empathy-section" style="background-color: rgba(76, 175, 80, 0.05);">
              <h3><span class="material-symbols-outlined">chat</span> Says</h3>
              <ul class="empathy-list">
                <li class="empathy-item">
                  <div class="empathy-text">"I love environmental protection activities."</div>
                </li>
                <li class="empathy-item">
                  <div class="empathy-text">"I want to contribute to a greener future."</div>
                </li>
                <li class="empathy-item">
                  <div class="empathy-text">"I enjoy projects that have real impact."</div>
                </li>
                <li class="empathy-item">
                  <div class="empathy-text">"I want to connect with others who share my environmental interests."</div>
                </li>
              </ul>
            </div>

            <!-- Thinks -->
            <div class="empathy-section" style="background-color: rgba(76, 175, 80, 0.05);">
              <h3><span class="material-symbols-outlined">psychology</span> Thinks</h3>
              <ul class="empathy-list">
                <li class="empathy-item">
                  <div class="empathy-text">"Does this project really benefit the environment?"</div>
                </li>
                <li class="empathy-item">
                  <div class="empathy-text">"Do I have enough time to participate regularly?"</div>
                </li>
                <li class="empathy-item">
                  <div class="empathy-text">"How can I spread environmental awareness to more people?"</div>
                </li>
              </ul>
            </div>

            <!-- Does -->
            <div class="empathy-section" style="background-color: rgba(76, 175, 80, 0.05);">
              <h3><span class="material-symbols-outlined">directions_run</span> Does</h3>
              <ul class="empathy-list">
                <li class="empathy-item">
                  <div class="empathy-text">Actively searches for and registers for environmental projects</div>
                </li>
                <li class="empathy-item">
                  <div class="empathy-text">Participates in volunteer activities like planting trees, picking up trash, advocacy</div>
                </li>
                <li class="empathy-item">
                  <div class="empathy-text">Shares activities on social media to encourage others</div>
                </li>
                <li class="empathy-item">
                  <div class="empathy-text">Proposes initiatives or provides feedback to improve projects</div>
                </li>
              </ul>
            </div>

            <!-- Feels -->
            <div class="empathy-section" style="background-color: rgba(76, 175, 80, 0.05);">
              <h3><span class="material-symbols-outlined">sentiment_satisfied</span> Feels</h3>
              <ul class="empathy-list">
                <li class="empathy-item">
                  <div class="empathy-text">Excited when finding a suitable project</div>
                </li>
                <li class="empathy-item">
                  <div class="empathy-text">Happy when seeing positive impact from their activities</div>
                </li>
                <li class="empathy-item">
                  <div class="empathy-text">Confused when there are too many projects to choose from</div>
                </li>
                <li class="empathy-item">
                  <div class="empathy-text">Disappointed if the organization is unprofessional or lacks clear guidance</div>
                </li>
              </ul>
            </div>

            <!-- Sees -->
            <div class="empathy-section" style="background-color: rgba(76, 175, 80, 0.05);">
              <h3><span class="material-symbols-outlined">visibility</span> Sees</h3>
              <ul class="empathy-list">
                <li class="empathy-item">
                  <div class="empathy-text">Many environmental organizations calling for participation</div>
                </li>
                <li class="empathy-item">
                  <div class="empathy-text">Advertisements and events about environmental protection on social media</div>
                </li>
                <li class="empathy-item">
                  <div class="empathy-text">Success stories from community projects</div>
                </li>
              </ul>
            </div>

            <!-- Hears -->
            <div class="empathy-section" style="background-color: rgba(76, 175, 80, 0.05);">
              <h3><span class="material-symbols-outlined">hearing</span> Hears</h3>
              <ul class="empathy-list">
                <li class="empathy-item">
                  <div class="empathy-text">Discussions about the environment from friends and colleagues</div>
                </li>
                <li class="empathy-item">
                  <div class="empathy-text">Educational information about environmental protection on podcasts and seminars</div>
                </li>
                <li class="empathy-item">
                  <div class="empathy-text">Calls to participate from volunteer organizations</div>
                </li>
              </ul>
            </div>

            <!-- Pain Points -->
            <div class="empathy-section" style="background-color: rgba(255, 152, 0, 0.05);">
              <h3><span class="material-symbols-outlined">warning</span> Pain Points</h3>
              <ul class="empathy-list">
                <li class="empathy-item">
                  <div class="empathy-text">Too many choices but lack of specific guidance</div>
                </li>
                <li class="empathy-item">
                  <div class="empathy-text">Some projects have no real impact or are poorly organized</div>
                </li>
                <li class="empathy-item">
                  <div class="empathy-text">Lack of reliable comprehensive platforms</div>
                </li>
              </ul>
            </div>

            <!-- Goals -->
            <div class="empathy-section" style="background-color: rgba(76, 175, 80, 0.05);">
              <h3><span class="material-symbols-outlined">flag</span> Goals</h3>
              <ul class="empathy-list">
                <li class="empathy-item">
                  <div class="empathy-text">Participate in meaningful projects, contribute to the environment</div>
                </li>
                <li class="empathy-item">
                  <div class="empathy-text">Connect with a community that shares the same passion</div>
                </li>
                <li class="empathy-item">
                  <div class="empathy-text">Raise awareness and inspire others</div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Empathy Map 2: Certificate-Seeking Participant -->
        <div class="empathy-map card">
          <div class="card-header">
            <div class="card-icon" style="background-color: rgba(33, 150, 243, 0.2); color: var(--secondary-color);">
              <span class="material-symbols-outlined">workspace_premium</span>
            </div>
            <div class="card-title">
              <h2>Certificate-Seeking Participant</h2>
              <p>Participates for external incentives</p>
            </div>
          </div>

          <div class="empathy-grid">
            <!-- Says -->
            <div class="empathy-section" style="background-color: rgba(33, 150, 243, 0.05);">
              <h3><span class="material-symbols-outlined">chat</span> Says</h3>
              <ul class="empathy-list">
                <li class="empathy-item">
                  <div class="empathy-text">"I need a certificate for attendance points."</div>
                </li>
                <li class="empathy-item">
                  <div class="empathy-text">"My school requires participation in extracurricular activities."</div>
                </li>
                <li class="empathy-item">
                  <div class="empathy-text">"I don't care much about the environment, I just need to fulfill personal requirements."</div>
                </li>
                <li class="empathy-item">
                  <div class="empathy-text">"Are there any short-term, easy-to-join projects that provide certificates?"</div>
                </li>
              </ul>
            </div>

            <!-- Thinks -->
            <div class="empathy-section" style="background-color: rgba(33, 150, 243, 0.05);">
              <h3><span class="material-symbols-outlined">psychology</span> Thinks</h3>
              <ul class="empathy-list">
                <li class="empathy-item">
                  <div class="empathy-text">"Does this project issue certificates quickly?"</div>
                </li>
                <li class="empathy-item">
                  <div class="empathy-text">"Can I participate minimally and still meet requirements?"</div>
                </li>
                <li class="empathy-item">
                  <div class="empathy-text">"Is there a way to complete this without doing too much work?"</div>
                </li>
              </ul>
            </div>

            <!-- Does -->
            <div class="empathy-section" style="background-color: rgba(33, 150, 243, 0.05);">
              <h3><span class="material-symbols-outlined">directions_run</span> Does</h3>
              <ul class="empathy-list">
                <li class="empathy-item">
                  <div class="empathy-text">Searches for projects that provide certificates or attendance points</div>
                </li>
                <li class="empathy-item">
                  <div class="empathy-text">Chooses activities that are easy to participate in and require minimal effort</div>
                </li>
                <li class="empathy-item">
                  <div class="empathy-text">Participates once and rarely returns to other projects</div>
                </li>
                <li class="empathy-item">
                  <div class="empathy-text">Only shares project information when required by organizers</div>
                </li>
              </ul>
            </div>

            <!-- Feels -->
            <div class="empathy-section" style="background-color: rgba(33, 150, 243, 0.05);">
              <h3><span class="material-symbols-outlined">sentiment_satisfied</span> Feels</h3>
              <ul class="empathy-list">
                <li class="empathy-item">
                  <div class="empathy-text">Uninterested, reluctant to participate due to lack of genuine interest</div>
                </li>
                <li class="empathy-item">
                  <div class="empathy-text">Stressed if the certification process is complicated</div>
                </li>
                <li class="empathy-item">
                  <div class="empathy-text">Satisfied if requirements are completed quickly</div>
                </li>
              </ul>
            </div>

            <!-- Sees -->
            <div class="empathy-section" style="background-color: rgba(33, 150, 243, 0.05);">
              <h3><span class="material-symbols-outlined">visibility</span> Sees</h3>
              <ul class="empathy-list">
                <li class="empathy-item">
                  <div class="empathy-text">Notifications from schools or organizations about participation requirements</div>
                </li>
                <li class="empathy-item">
                  <div class="empathy-text">Project advertisements on social media</div>
                </li>
                <li class="empathy-item">
                  <div class="empathy-text">Others participating to achieve similar goals</div>
                </li>
              </ul>
            </div>

            <!-- Hears -->
            <div class="empathy-section" style="background-color: rgba(33, 150, 243, 0.05);">
              <h3><span class="material-symbols-outlined">hearing</span> Hears</h3>
              <ul class="empathy-list">
                <li class="empathy-item">
                  <div class="empathy-text">Friends talking about easy ways to get certificates</div>
                </li>
                <li class="empathy-item">
                  <div class="empathy-text">School or company regulations requiring participation</div>
                </li>
                <li class="empathy-item">
                  <div class="empathy-text">Advice from those who have participated before</div>
                </li>
              </ul>
            </div>

            <!-- Pain Points -->
            <div class="empathy-section" style="background-color: rgba(255, 152, 0, 0.05);">
              <h3><span class="material-symbols-outlined">warning</span> Pain Points</h3>
              <ul class="empathy-list">
                <li class="empathy-item">
                  <div class="empathy-text">Difficulty finding projects that meet certification requirements</div>
                </li>
                <li class="empathy-item">
                  <div class="empathy-text">Some projects require long-term commitment, causing inconvenience</div>
                </li>
                <li class="empathy-item">
                  <div class="empathy-text">Verification and certification processes can be time-consuming</div>
                </li>
              </ul>
            </div>

            <!-- Goals -->
            <div class="empathy-section" style="background-color: rgba(33, 150, 243, 0.05);">
              <h3><span class="material-symbols-outlined">flag</span> Goals</h3>
              <ul class="empathy-list">
                <li class="empathy-item">
                  <div class="empathy-text">Complete requirements quickly and easily</div>
                </li>
                <li class="empathy-item">
                  <div class="empathy-text">Obtain certificates or attendance points as required</div>
                </li>
                <li class="empathy-item">
                  <div class="empathy-text">Consider further participation if the experience is positive</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .empathy-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin-top: 20px;
    }
    
    .empathy-section {
      padding: 15px;
      border-radius: 8px;
    }

    .empathy-section h3 {
  color: var(--text-color);
  font-size: 1.1rem;
  margin-top: 0;
  margin-bottom: 12px;
  border-bottom: 1px solid rgba(0,0,0,0.1);
  padding-bottom: 8px;
}

.empathy-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.empathy-item {
  margin-bottom: 8px;
  font-size: 0.95rem;
}

.empathy-text {
  line-height: 1.4;
}

.nav-buttons {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  gap: 10px;
}

.nav-button {
  padding: 10px 20px;
  background-color: white;
  border: 2px solid var(--primary-color);
  border-radius: 30px;
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
}

.nav-button:hover, .nav-button.active {
  background-color: var(--primary-color);
  color: white;
}

@media (max-width: 768px) {
  .empathy-grid {
    grid-template-columns: 1fr;
  }
}
`]
})
export class EmpathyMapComponent {
constructor() {}
}