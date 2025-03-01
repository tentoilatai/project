import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-personas',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="container">
      <div class="header">
        <h1>User Personas</h1>
        <p>Understanding our environmental project participants</p>
        <div class="nav-buttons">
          <a routerLink="/" class="nav-button active">Personas</a>
          <a routerLink="/empathy-map" class="nav-button">Empathy Maps</a>
          <a routerLink="/journey-map" class="nav-button">Journey Maps</a>
        </div>
      </div>

      <div class="personas-container">
        <!-- Persona 1: Passion-Driven Volunteer -->
        <div class="persona-card card">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
            alt="Passion-Driven Volunteer" 
            class="persona-image"
          />
          
          <div class="card-header">
            <div class="card-icon" style="background-color: rgba(76, 175, 80, 0.2); color: var(--primary-color);">
              <span class="material-symbols-outlined">volunteer_activism</span>
            </div>
            <div class="card-title">
              <h2>Passion-Driven Volunteer</h2>
              <p>Participates out of genuine interest</p>
            </div>
          </div>

          <div class="section">
            <h3><span class="material-symbols-outlined">person</span> Characteristics</h3>
            <ul class="feature-list">
              <li class="feature-item">
                <span class="material-symbols-outlined feature-icon">group</span>
                <div class="feature-text">Students, office workers, community enthusiasts</div>
              </li>
              <li class="feature-item">
                <span class="material-symbols-outlined feature-icon">payments</span>
                <div class="feature-text">Income varies by occupation and field</div>
              </li>
              <li class="feature-item">
                <span class="material-symbols-outlined feature-icon">nature</span>
                <div class="feature-text">Passionate about environmental protection</div>
              </li>
              <li class="feature-item">
                <span class="material-symbols-outlined feature-icon">schedule</span>
                <div class="feature-text">Dedicates free time to volunteer campaigns</div>
              </li>
            </ul>
          </div>

          <div class="section">
            <h3><span class="material-symbols-outlined">trending_up</span> Behaviors</h3>
            <ul class="feature-list">
              <li class="feature-item">
                <span class="material-symbols-outlined feature-icon">search</span>
                <div class="feature-text">Actively searches for projects across platforms</div>
              </li>
              <li class="feature-item">
                <span class="material-symbols-outlined feature-icon">event_available</span>
                <div class="feature-text">Registers for projects that match schedule and interests</div>
              </li>
              <li class="feature-item">
                <span class="material-symbols-outlined feature-icon">share</span>
                <div class="feature-text">Shares volunteer activities on social media</div>
              </li>
              <li class="feature-item">
                <span class="material-symbols-outlined feature-icon">lightbulb</span>
                <div class="feature-text">Suggests ideas and invites friends to join</div>
              </li>
              <li class="feature-item">
                <span class="material-symbols-outlined feature-icon">repeat</span>
                <div class="feature-text">Tends to participate in multiple projects over time</div>
              </li>
            </ul>
          </div>

          <div class="section">
            <h3><span class="material-symbols-outlined">warning</span> Challenges</h3>
            <ul class="feature-list">
              <li class="feature-item">
                <span class="material-symbols-outlined feature-icon">help</span>
                <div class="feature-text">Difficulty choosing between many project options</div>
              </li>
              <li class="feature-item">
                <span class="material-symbols-outlined feature-icon">mood_bad</span>
                <div class="feature-text">Feels disappointed when missing project opportunities</div>
              </li>
              <li class="feature-item">
                <span class="material-symbols-outlined feature-icon">note_alt</span>
                <div class="feature-text">Must track personal projects using other apps or notes</div>
              </li>
            </ul>
          </div>

          <div class="section">
            <h3><span class="material-symbols-outlined">flag</span> Goals</h3>
            <ul class="feature-list">
              <li class="feature-item">
                <span class="material-symbols-outlined feature-icon">volunteer_activism</span>
                <div class="feature-text">Find meaningful projects to contribute to the community</div>
              </li>
              <li class="feature-item">
                <span class="material-symbols-outlined feature-icon">diversity_3</span>
                <div class="feature-text">Connect with like-minded environmental enthusiasts</div>
              </li>
              <li class="feature-item">
                <span class="material-symbols-outlined feature-icon">school</span>
                <div class="feature-text">Gain practical experience for sustainable development careers</div>
              </li>
              <li class="feature-item">
                <span class="material-symbols-outlined feature-icon">history</span>
                <div class="feature-text">Maintain a portfolio of participated projects</div>
              </li>
            </ul>
          </div>
        </div>

        <!-- Persona 2: Certificate-Seeking Participant -->
        <div class="persona-card card">
          <img 
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
            alt="Certificate-Seeking Participant" 
            class="persona-image"
          />
          
          <div class="card-header">
            <div class="card-icon" style="background-color: rgba(33, 150, 243, 0.2); color: var(--secondary-color);">
              <span class="material-symbols-outlined">workspace_premium</span>
            </div>
            <div class="card-title">
              <h2>Certificate-Seeking Participant</h2>
              <p>Participates for external incentives</p>
            </div>
          </div>

          <div class="section">
            <h3><span class="material-symbols-outlined">person</span> Characteristics</h3>
            <ul class="feature-list">
              <li class="feature-item">
                <span class="material-symbols-outlined feature-icon">group</span>
                <div class="feature-text">Students needing certificates, employees fulfilling company requirements</div>
              </li>
              <li class="feature-item">
                <span class="material-symbols-outlined feature-icon">payments</span>
                <div class="feature-text">Income varies, may be affected by project participation</div>
              </li>
              <li class="feature-item">
                <span class="material-symbols-outlined feature-icon">sentiment_neutral</span>
                <div class="feature-text">No special passion for environment but needs participation for personal goals</div>
              </li>
            </ul>
          </div>

          <div class="section">
            <h3><span class="material-symbols-outlined">trending_up</span> Behaviors</h3>
            <ul class="feature-list">
              <li class="feature-item">
                <span class="material-symbols-outlined feature-icon">search</span>
                <div class="feature-text">Only searches for projects offering certificates or specific benefits</div>
              </li>
              <li class="feature-item">
                <span class="material-symbols-outlined feature-icon">timer</span>
                <div class="feature-text">Chooses easy projects requiring minimal time and effort</div>
              </li>
              <li class="feature-item">
                <span class="material-symbols-outlined feature-icon">fact_check</span>
                <div class="feature-text">Only participates in projects offering needed certificates</div>
              </li>
              <li class="feature-item">
                <span class="material-symbols-outlined feature-icon">share</span>
                <div class="feature-text">Shares project information on social media only when required</div>
              </li>
            </ul>
          </div>

          <div class="section">
            <h3><span class="material-symbols-outlined">warning</span> Challenges</h3>
            <ul class="feature-list">
              <li class="feature-item">
                <span class="material-symbols-outlined feature-icon">help</span>
                <div class="feature-text">Difficulty finding projects that meet school or organization requirements</div>
              </li>
              <li class="feature-item">
                <span class="material-symbols-outlined feature-icon">help</span>
                <div class="feature-text">Unsure which project to choose among many options</div>
              </li>
              <li class="feature-item">
                <span class="material-symbols-outlined feature-icon">verified</span>
                <div class="feature-text">Struggles to find reputable, well-known projects</div>
              </li>
            </ul>
          </div>

          <div class="section">
            <h3><span class="material-symbols-outlined">flag</span> Goals</h3>
            <ul class="feature-list">
              <li class="feature-item">
                <span class="material-symbols-outlined feature-icon">workspace_premium</span>
                <div class="feature-text">Find projects that provide participation certificates</div>
              </li>
              <li class="feature-item">
                <span class="material-symbols-outlined feature-icon">task_alt</span>
                <div class="feature-text">Complete school or organization requirements efficiently</div>
              </li>
              <li class="feature-item">
                <span class="material-symbols-outlined feature-icon">thumb_up</span>
                <div class="feature-text">Find websites with good user experience for future consideration</div>
              </li>
              <li class="feature-item">
                <span class="material-symbols-outlined feature-icon">verified_user</span>
                <div class="feature-text">Find reputable projects through organizer logos, project leaders, descriptions</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
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
  `]
})
export class PersonasComponent {
  constructor() {}
}