import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-journey-map',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="container">
      <div class="header">
        <h1>Customer Journey Maps</h1>
        <p>Understanding the experience of our environmental project participants</p>
        <div class="nav-buttons">
          <a routerLink="/" class="nav-button">Personas</a>
          <a routerLink="/empathy-map" class="nav-button">Empathy Maps</a>
          <a routerLink="/journey-map" class="nav-button active">Journey Maps</a>
        </div>
      </div>

      <div class="journey-maps-container">
        <!-- Journey Map 1: Certificate-Seeking Participant -->
        <div class="journey-map card">
          <div class="card-header">
            <div class="card-icon" style="background-color: rgba(33, 150, 243, 0.2); color: var(--secondary-color);">
              <span class="material-symbols-outlined">workspace_premium</span>
            </div>
            <div class="card-title">
              <h2>Certificate-Seeking Participant</h2>
              <p>Journey of a participant motivated by external incentives</p>
            </div>
          </div>

          <div class="journey-grid">
            <!-- Stage Headers -->
            <div class="journey-stage-header">
              <span class="material-symbols-outlined">visibility</span>
              <h3>Awareness</h3>
            </div>
            <div class="journey-stage-header">
              <span class="material-symbols-outlined">psychology</span>
              <h3>Consideration</h3>
            </div>
            <div class="journey-stage-header">
              <span class="material-symbols-outlined">group_add</span>
              <h3>Participation</h3>
            </div>
            <div class="journey-stage-header">
              <span class="material-symbols-outlined">favorite</span>
              <h3>Engagement</h3>
            </div>

            <!-- Actions -->
            <div class="journey-row">
              <h4 class="journey-row-header">
                <span class="material-symbols-outlined">directions_run</span>
                Actions
              </h4>
              <div class="journey-cell">
                <ul class="journey-list">
                  <li>Hears friends and colleagues sharing about how to get certificates from projects on the web</li>
                </ul>
              </div>
              <div class="journey-cell">
                <ul class="journey-list">
                  <li>Considers time and participation conditions</li>
                  <li>Searches for short-term projects with minimal commitment</li>
                </ul>
              </div>
              <div class="journey-cell">
                <ul class="journey-list">
                  <li>Registers for minimal participation to meet requirements</li>
                  <li>Performs activities according to instructions</li>
                </ul>
              </div>
              <div class="journey-cell">
                <ul class="journey-list">
                  <li>May continue participating in other projects if the process is easy</li>
                  <li>Evaluates experience on the platform</li>
                </ul>
              </div>
            </div>

            <!-- Thoughts -->
            <div class="journey-row">
              <h4 class="journey-row-header">
                <span class="material-symbols-outlined">psychology</span>
                Thoughts
              </h4>
              <div class="journey-cell">
                <ul class="journey-list">
                  <li>"I need to participate because it's mandatory"</li>
                  <li>"Is there a way to complete this quickly?"</li>
                </ul>
              </div>
              <div class="journey-cell">
                <ul class="journey-list">
                  <li>"Will this project issue certificates on time?"</li>
                  <li>"Can I participate minimally and still meet requirements?"</li>
                </ul>
              </div>
              <div class="journey-cell">
                <ul class="journey-list">
                  <li>"Is the participation process simple?"</li>
                  <li>"Is anyone checking my participation?"</li>
                </ul>
              </div>
              <div class="journey-cell">
                <ul class="journey-list">
                  <li>"Would I continue participating if it wasn't mandatory?"</li>
                </ul>
              </div>
            </div>

            <!-- Pain Points -->
            <div class="journey-row">
              <h4 class="journey-row-header">
                <span class="material-symbols-outlined">warning</span>
                Pain Points
              </h4>
              <div class="journey-cell">
                <ul class="journey-list">
                  <li>Difficulty finding projects that meet certification requirements</li>
                </ul>
              </div>
              <div class="journey-cell">
                <ul class="journey-list">
                  <li>Concerns about website credibility</li>
                  <li>Not receiving notifications about project participation</li>
                </ul>
              </div>
              <div class="journey-cell">
                <ul class="journey-list">
                  <li>Lack of information about the certification process</li>
                </ul>
              </div>
              <div class="journey-cell">
                <ul class="journey-list">
                  <li>Uncertainty about future participation</li>
                </ul>
              </div>
            </div>

            <!-- Emotions -->
            <div class="journey-row">
              <h4 class="journey-row-header">
                <span class="material-symbols-outlined">sentiment_satisfied</span>
                Emotions
              </h4>
              <div class="journey-cell">
                <div class="emotion">
                  <span class="emotion-icon">🤨</span>
                  <span class="emotion-text">Bored, Reluctant, Confused</span>
                </div>
              </div>
              <div class="journey-cell">
                <div class="emotion">
                  <span class="emotion-icon">🤔</span>
                  <span class="emotion-text">Cautious, Calculating</span>
                </div>
              </div>
              <div class="journey-cell">
                <div class="emotion">
                  <span class="emotion-icon">😐</span>
                  <span class="emotion-text">Completing the task without interest</span>
                </div>
              </div>
              <div class="journey-cell">
                <div class="emotion">
                  <span class="emotion-icon">😊</span>
                  <span class="emotion-text">Satisfied if the process was easy</span>
                </div>
              </div>
            </div>

            <!-- Opportunities -->
            <div class="journey-row">
              <h4 class="journey-row-header">
                <span class="material-symbols-outlined">lightbulb</span>
                Opportunities
              </h4>
              <div class="journey-cell">
                <ul class="journey-list">
                  <li>Clearly promote benefits and participation methods</li>
                </ul>
              </div>
              <div class="journey-cell">
                <ul class="journey-list">
                  <li>Simplify registration process</li>
                  <li>Provide clear, specific project content</li>
                </ul>
              </div>
              <div class="journey-cell">
                <ul class="journey-list">
                  <li>Step-by-step guides to help complete requirements more easily</li>
                </ul>
              </div>
              <div class="journey-cell">
                <ul class="journey-list">
                  <li>Integrate incentive programs for multiple participations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Journey Map 2: Passion-Driven Volunteer -->
        <div class="journey-map card">
          <div class="card-header">
            <div class="card-icon" style="background-color: rgba(76, 175, 80, 0.2); color: var(--primary-color);">
              <span class="material-symbols-outlined">volunteer_activism</span>
            </div>
            <div class="card-title">
              <h2>Passion-Driven Volunteer</h2>
              <p>Journey of a participant motivated by genuine interest</p>
            </div>
          </div>

          <div class="journey-grid">
            <!-- Stage Headers -->
            <div class="journey-stage-header">
              <span class="material-symbols-outlined">visibility</span>
              <h3>Awareness</h3>
            </div>
            <div class="journey-stage-header">
              <span class="material-symbols-outlined">psychology</span>
              <h3>Decision</h3>
            </div>
            <div class="journey-stage-header">
              <span class="material-symbols-outlined">group_add</span>
              <h3>Participation</h3>
            </div>
            <div class="journey-stage-header">
              <span class="material-symbols-outlined">favorite</span>
              <h3>Engagement</h3>
            </div>

            <!-- Actions -->
            <div class="journey-row">
              <h4 class="journey-row-header">
                <span class="material-symbols-outlined">directions_run</span>
                Actions
              </h4>
              <div class="journey-cell">
                <ul class="journey-list">
                  <li>Sees advertisements about the platform on social media and press</li>
                  <li>Hears mentions from friends and colleagues</li>
                  <li>Searches Google for environmental projects</li>
                </ul>
              </div>
              <div class="journey-cell">
                <ul class="journey-list">
                  <li>Reads reviews about the platform</li>
                  <li>Compares with other information sources</li>
                  <li>Checks transparency of organizations on the platform</li>
                </ul>
              </div>
              <div class="journey-cell">
                <ul class="journey-list">
                  <li>Registers an account and searches for suitable projects</li>
                  <li>Chooses to participate in a project and receives guidance</li>
                  <li>Contacts the organization for more details</li>
                </ul>
              </div>
              <div class="journey-cell">
                <ul class="journey-list">
                  <li>If satisfied, continues to participate in new projects</li>
                  <li>Shares experiences on social media</li>
                  <li>Invites friends to join</li>
                </ul>
              </div>
            </div>

            <!-- Thoughts -->
            <div class="journey-row">
              <h4 class="journey-row-header">
                <span class="material-symbols-outlined">psychology</span>
                Thoughts
              </h4>
              <div class="journey-cell">
                <ul class="journey-list">
                  <li>"I want to participate but don't know where to find information"</li>
                  <li>"Is this platform reliable?"</li>
                </ul>
              </div>
              <div class="journey-cell">
                <ul class="journey-list">
                  <li>"Does this platform aggregate enough information from many organizations?"</li>
                  <li>"Can I search according to suitable criteria?"</li>
                </ul>
              </div>
              <div class="journey-cell">
                <ul class="journey-list">
                  <li>"Is the registration process easy?"</li>
                  <li>"Can I contact the organization directly?"</li>
                </ul>
              </div>
              <div class="journey-cell">
                <ul class="journey-list">
                  <li>"How else can I contribute besides volunteering?"</li>
                </ul>
              </div>
            </div>

            <!-- Pain Points -->
            <div class="journey-row">
              <h4 class="journey-row-header">
                <span class="material-symbols-outlined">warning</span>
                Pain Points
              </h4>
              <div class="journey-cell">
                <ul class="journey-list">
                  <li>Lack of platforms aggregating environmental project information</li>
                  <li>Confusion with too many individual websites</li>
                </ul>
              </div>
              <div class="journey-cell">
                <ul class="journey-list">
                  <li>Difficulty finding specific information suitable for their time and abilities</li>
                </ul>
              </div>
              <div class="journey-cell">
                <ul class="journey-list">
                  <li>Difficulties in the registration process</li>
                  <li>No detailed guidance for each project</li>
                </ul>
              </div>
              <div class="journey-cell">
                <ul class="journey-list">
                  <li>No support programs for long-term participants</li>
                </ul>
              </div>
            </div>

            <!-- Emotions -->
            <div class="journey-row">
              <h4 class="journey-row-header">
                <span class="material-symbols-outlined">sentiment_satisfied</span>
                Emotions
              </h4>
              <div class="journey-cell">
                <div class="emotion">
                  <span class="emotion-icon">😟</span>
                  <span class="emotion-text">Worried, Uncertain</span>
                </div>
              </div>
              <div class="journey-cell">
                <div class="emotion">
                  <span class="emotion-icon">🤔</span>
                  <span class="emotion-text">Considering, Cautious</span>
                </div>
                <div class="emotion">
                  <span class="emotion-icon">😃</span>
                  <span class="emotion-text">Excited but still doubtful</span>
                </div>
              </div>
              <div class="journey-cell">
                <div class="emotion">
                  <span class="emotion-icon">😊</span>
                  <span class="emotion-text">Engaged, Curious</span>
                </div>
              </div>
              <div class="journey-cell">
                <div class="emotion">
                  <span class="emotion-icon">😄</span>
                  <span class="emotion-text">Satisfied, wants to recommend to friends</span>
                </div>
              </div>
            </div>

            <!-- Opportunities -->
            <div class="journey-row">
              <h4 class="journey-row-header">
                <span class="material-symbols-outlined">lightbulb</span>
                Opportunities
              </h4>
              <div class="journey-cell">
                <ul class="journey-list">
                  <li>Clearly promote benefits and participation methods</li>
                </ul>
              </div>
              <div class="journey-cell">
                <ul class="journey-list">
                  <li>Provide smart search tools, categorize projects according to needs</li>
                </ul>
              </div>
              <div class="journey-cell">
                <ul class="journey-list">
                  <li>Support detailed, visual guidance on how to participate</li>
                </ul>
              </div>
              <div class="journey-cell">
                <ul class="journey-list">
                  <li>Build long-term engagement programs, offer badges and rewards for active participants</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .journey-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1px;
      background-color: rgba(0,0,0,0.1);
      border-radius: 8px;
      overflow: hidden;
      margin-top: 20px;
    }
    
    .journey-stage-header {
      background-color: white;
      padding: 15px;
      text-align: center;
      border-bottom: 3px solid var(--primary-color);
    }
    
    .journey-stage-header span {
      font-size: 24px;
      color: var(--primary-color);
      display: block;
      margin-bottom: 8px;
    }
    
    .journey-stage-header h3 {
      margin: 0;
      font-size: 1rem;
      color: var(--text-color);
    }
    
    .journey-row {
      display: contents;
    }
    
    .journey-row-header {
      background-color: rgba(0,0,0,0.03);
      padding: 15px;
      margin: 0;
      display: flex;
      align-items: center;
      font-size: 1rem;
      color: var(--text-color);
      font-weight: 500;
      border-right: 1px solid rgba(0,0,0,0.1);
    }
    
    .journey-row-header span {
      margin-right: 8px;
      color: var(--primary-color);
    }
    
    .journey-cell {
      background-color: white;
      padding: 15px;
      font-size: 0.9rem;
    }
    
    .journey-list {
      list-style-type: none;
      padding: 0;
      margin: 0;
    }
    
    .journey-list li {
      position: relative;
      padding-left: 15px;
      margin-bottom: 8px;
      line-height: 1.4;
    }
    
    .journey-list li:before {
      content: "•";
      position: absolute;
      left: 0;
      color: var(--primary-color);
    }
    
    .emotion {
      display: flex;
      align-items: center;
      margin-bottom: 8px;
    }
    
    .emotion-icon {
      font-size: 1.5rem;
      margin-right: 10px;
    }
    
    .emotion-text {
      flex: 1;
    }
    
    @media (max-width: 992px) {
      .journey-grid {
        display: block;
      }
      
      .journey-stage-header {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        text-align: left;
        border-left: 3px solid var(--primary-color);
        border-bottom: none;
      }
      
      .journey-stage-header span {
        margin-right: 10px;
        margin-bottom: 0;
      }
      
      .journey-row-header {
        border-right: none;
        border-left: 3px solid var(--primary-color);
      }
      
      .journey-cell {
        border-left: 3px solid var(--accent-color);
      }
    }
  `]
})
export class JourneyMapComponent {
  constructor() {}
}