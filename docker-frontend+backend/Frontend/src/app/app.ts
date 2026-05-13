import { HttpClient } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Frontend');

  constructor(private readonly http: HttpClient) {}

  ngOnInit(): void {
     this.http.get('http://localhost:3000/').subscribe({
      next: (response) => console.log('Data from API:', response),
      error: (err) => console.error('Connection error:', err)
    });
  }

}


// import { HttpClient } from '@angular/common/http';
// import { Component, signal, inject, OnInit } from '@angular/core'; // Added inject and OnInit
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet],
//   templateUrl: './app.app.html',
//   styleUrl: './app.component.css'
// })
// export class App implements OnInit {
//   protected readonly title = signal('Frontend');
  
//   // Inject the HttpClient service
//   private http = inject(HttpClient);

//   ngOnInit(): void {
//     // Use the injected instance 'this.http'
//     this.http.get('http://localhost:3000/').subscribe({
//       next: (response) => console.log('Data from API:', response),
//       error: (err) => console.error('Connection error:', err)
//     });
//   }
// }