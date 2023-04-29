import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = '2048';
  color = 'white';

  grids: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  ngOnInit() {
    let beggin = 0;
    for (let i = 0; i < 2; i++) {
      beggin = Math.floor(Math.random() * 16);
      this.grids[beggin] = 2;
    }
  }
  onClick(index: number) {
    console.log('Button clicked:', index);
    this.grids[index] += 2;
  }

  @HostListener('document:keydown.arrowDown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    // =========================================== 1x1 is true =====================================Head
    //if only 1x1 is true
    if (this.grids[0] && !this.grids[4] && !this.grids[8] && !this.grids[12]) {
      this.grids[12] = this.grids[0];
      this.grids[0] = 0;
    }
    //if 1x1 and 4x1 is true
    else if (
      this.grids[0] &&
      !this.grids[4] &&
      !this.grids[8] &&
      this.grids[12]
    ) {
      if (this.grids[0] == this.grids[12]) {
        this.grids[12] += this.grids[0];
        this.grids[0] = 0;
      } else {
        this.grids[8] = this.grids[0];
        this.grids[0] = 0;
      }
    }
    //if 1x1 & 3x1 & 4x1 is true
    else if (
      this.grids[0] &&
      !this.grids[4] &&
      this.grids[8] &&
      this.grids[12]
    ) {
      if (this.grids[8] == this.grids[12]) {
        this.grids[12] += this.grids[8];
        this.grids[8] = this.grids[0];
        this.grids[0] = 0;
      } else if (this.grids[8] != this.grids[12]) {
        if (this.grids[0] == this.grids[8]) {
          this.grids[8] += this.grids[0];
          this.grids[0] = 0;
        } else {
          this.grids[4] = this.grids[0];
          this.grids[0] = 0;
        }
      }
    }

    //if 1x1 & 2x1 & 3x1 & 4x1 is true
    else if (
      this.grids[0] &&
      this.grids[4] &&
      this.grids[8] &&
      this.grids[12]
    ) {
      if (this.grids[0] == this.grids[4] && this.grids[8] == this.grids[12]) {
        this.grids[12] += this.grids[8];
        this.grids[8] = this.grids[4] + this.grids[0];
        this.grids[4] = 0;
        this.grids[0] = 0;
      } else if (
        this.grids[0] == this.grids[4] &&
        this.grids[8] != this.grids[12]
      ) {
        if (this.grids[4] != this.grids[8]) {
          this.grids[4] += this.grids[0];
          this.grids[0] = 0;
        } else {
          this.grids[8] += this.grids[4];
          this.grids[4] = this.grids[0];
          this.grids[0] = 0;
        }
      } else if (
        this.grids[0] != this.grids[4] &&
        this.grids[8] == this.grids[12]
      ) {
        this.grids[12] += this.grids[8];
        this.grids[8] = this.grids[4];
        this.grids[4] = this.grids[0];
        this.grids[0] = 0;
      } else if (
        this.grids[0] != this.grids[4] &&
        this.grids[8] != this.grids[12] &&
        this.grids[4] == this.grids[8]
      ) {
        this.grids[8] += this.grids[4];
        this.grids[4] = this.grids[0];
        this.grids[0] = 0;
      }
    }
    // if 1x1 & 3x1 is true
    else if (
      this.grids[0] &&
      !this.grids[4] &&
      this.grids[8] &&
      !this.grids[12]
    ) {
      if (this.grids[0] == this.grids[8]) {
        this.grids[12] = this.grids[0] + this.grids[8];
        this.grids[8] = 0;
        this.grids[0] = 0;
      } else {
        this.grids[12] = this.grids[8];
        this.grids[8] = this.grids[0];
        this.grids[0] = 0;
      }
    }

    // if 1x1 & 2x1 & 3x1 is true
    else if (
      this.grids[0] &&
      this.grids[4] &&
      this.grids[8] &&
      !this.grids[12]
    ) {
      if (this.grids[8] == this.grids[4]) {
        this.grids[12] = this.grids[8] + this.grids[4];
        this.grids[8] = this.grids[0];
        this.grids[4] = 0;
        this.grids[0] = 0;
      } else if (this.grids[4] == this.grids[0]) {
        this.grids[12] = this.grids[8];
        this.grids[8] = this.grids[4] + this.grids[0];
        this.grids[4] = 0;
        this.grids[0] = 0;
      } else {
        this.grids[12] = this.grids[8];
        this.grids[8] = this.grids[4];
        this.grids[4] = this.grids[0];
        this.grids[0] = 0;
      }
    }
    // if 1x1 & 2x1 is true
    else if (
      this.grids[0] &&
      this.grids[4] &&
      !this.grids[8] &&
      !this.grids[12]
    ) {
      if (this.grids[4] == this.grids[0]) {
        this.grids[12] = this.grids[4] + this.grids[0];
        this.grids[4] = 0;
        this.grids[0] = 0;
      } else {
        this.grids[12] = this.grids[4];
        this.grids[8] = this.grids[0];
        this.grids[4] = 0;
        this.grids[0] = 0;
      }
    }
    // if 1x1 & 2x1 & 4x1 is true
    else if (
      this.grids[0] &&
      this.grids[4] &&
      !this.grids[8] &&
      this.grids[12]
    ) {
      if (this.grids[12] == this.grids[4]) {
        this.grids[12] += this.grids[4];
        this.grids[8] = this.grids[0];
        this.grids[4] = 0;
        this.grids[0] = 0;
      } else if (this.grids[0] == this.grids[4]) {
        this.grids[8] = this.grids[4] + this.grids[0];
        this.grids[4] = 0;
        this.grids[0] = 0;
      } else {
        this.grids[8] = this.grids[4];
        this.grids[4] = this.grids[0];
        this.grids[0] = 0;
      }
    }

    // =========================================== 1x1 is true =====================================Bottom
    // =========================================== 2x1 is true =====================================Head
    // if 2x1 is true
    else if (
      !this.grids[0] &&
      this.grids[4] &&
      !this.grids[8] &&
      !this.grids[12]
    ) {
      this.grids[12] = this.grids[4];
      this.grids[4] = 0;
    }
    // if 2x1 & 4x1 is true
    else if (
      !this.grids[0] &&
      this.grids[4] &&
      !this.grids[8] &&
      this.grids[12]
    ) {
      if (this.grids[4] == this.grids[12]) {
        this.grids[12] += this.grids[4];
        this.grids[4] = 0;
      } else {
        this.grids[8] = this.grids[4];
        this.grids[4] = 0;
      }
    }
    // if 2x1 & 3x1 & 4x1 is true
    else if (
      !this.grids[0] &&
      this.grids[4] &&
      this.grids[8] &&
      this.grids[12]
    ) {
      if (this.grids[12] == this.grids[8]) {
        this.grids[12] += this.grids[8];
        this.grids[8] = this.grids[4];
        this.grids[4] = 0;
      } else if (this.grids[4] == this.grids[8]) {
        this.grids[8] += this.grids[4];
        this.grids[4] = 0;
      }
    }
    //if 2x1 & 3x1 is true
    else if (
      !this.grids[0] &&
      this.grids[4] &&
      this.grids[8] &&
      !this.grids[12]
    ) {
      if (this.grids[4] == this.grids[8]) {
        this.grids[12] = this.grids[4] + this.grids[8];
        this.grids[4] = 0;
        this.grids[8] = 0;
      } else {
        this.grids[12] = this.grids[8];
        this.grids[8] = this.grids[4];
        this.grids[4] = 0;
      }
    }
    // =========================================== 2x1 is true =====================================Bottom
    // =========================================== 3x1 is true =====================================Head
    //if 3x1 is true
    else if (
      !this.grids[0] &&
      !this.grids[4] &&
      this.grids[8] &&
      !this.grids[12]
    ) {
      this.grids[12] = this.grids[8];
      this.grids[8] = 0;
    }
    // if 3x1 & 4x1 is true
    else if (
      !this.grids[0] &&
      !this.grids[4] &&
      this.grids[8] &&
      this.grids[12]
    ) {
      if (this.grids[12] == this.grids[8]) {
        this.grids[12] += this.grids[8];
        this.grids[8] = 0;
      }
    }
    // =========================================== 3x1 is true =====================================Bottom
    // ======================
    // =============================================
    // ======================

    // =========================================== 1x1 is true =====================================Head
    //if only 1x1 is true
    if (this.grids[1] && !this.grids[5] && !this.grids[9] && !this.grids[13]) {
      this.grids[13] = this.grids[1];
      this.grids[1] = 0;
    }
    //if 1x1 and 5x1 is true
    else if (
      this.grids[1] &&
      !this.grids[5] &&
      !this.grids[9] &&
      this.grids[13]
    ) {
      if (this.grids[1] == this.grids[13]) {
        this.grids[13] += this.grids[1];
        this.grids[1] = 0;
      } else {
        this.grids[9] = this.grids[1];
        this.grids[1] = 0;
      }
    }
    //if 1x1 & 3x1 & 5x1 is true
    else if (
      this.grids[1] &&
      !this.grids[5] &&
      this.grids[9] &&
      this.grids[13]
    ) {
      if (this.grids[9] == this.grids[13]) {
        this.grids[13] += this.grids[9];
        this.grids[9] = this.grids[1];
        this.grids[1] = 0;
      } else if (this.grids[9] != this.grids[13]) {
        if (this.grids[1] == this.grids[9]) {
          this.grids[9] += this.grids[1];
          this.grids[1] = 0;
        } else {
          this.grids[5] = this.grids[1];
          this.grids[1] = 0;
        }
      }
    }

    //if 1x1 & 2x1 & 3x1 & 5x1 is true
    else if (
      this.grids[1] &&
      this.grids[5] &&
      this.grids[9] &&
      this.grids[13]
    ) {
      if (this.grids[1] == this.grids[5] && this.grids[9] == this.grids[13]) {
        this.grids[13] += this.grids[9];
        this.grids[9] = this.grids[5] + this.grids[1];
        this.grids[5] = 0;
        this.grids[1] = 0;
      } else if (
        this.grids[1] == this.grids[5] &&
        this.grids[9] != this.grids[13]
      ) {
        if (this.grids[5] != this.grids[9]) {
          this.grids[5] += this.grids[1];
          this.grids[1] = 0;
        } else {
          this.grids[9] += this.grids[5];
          this.grids[5] = this.grids[1];
          this.grids[1] = 0;
        }
      } else if (
        this.grids[1] != this.grids[5] &&
        this.grids[9] == this.grids[13]
      ) {
        this.grids[13] += this.grids[9];
        this.grids[9] = this.grids[5];
        this.grids[5] = this.grids[1];
        this.grids[1] = 0;
      } else if (
        this.grids[1] != this.grids[5] &&
        this.grids[9] != this.grids[13] &&
        this.grids[5] == this.grids[9]
      ) {
        this.grids[9] += this.grids[5];
        this.grids[5] = this.grids[1];
        this.grids[1] = 0;
      }
    }
    // if 1x1 & 3x1 is true
    else if (
      this.grids[1] &&
      !this.grids[5] &&
      this.grids[9] &&
      !this.grids[13]
    ) {
      if (this.grids[1] == this.grids[9]) {
        this.grids[13] = this.grids[1] + this.grids[9];
        this.grids[9] = 0;
        this.grids[1] = 0;
      } else {
        this.grids[13] = this.grids[9];
        this.grids[9] = this.grids[1];
        this.grids[1] = 0;
      }
    }

    // if 1x1 & 2x1 & 3x1 is true
    else if (
      this.grids[1] &&
      this.grids[5] &&
      this.grids[9] &&
      !this.grids[13]
    ) {
      if (this.grids[9] == this.grids[5]) {
        this.grids[13] = this.grids[9] + this.grids[5];
        this.grids[9] = this.grids[1];
        this.grids[5] = 0;
        this.grids[1] = 0;
      } else if (this.grids[5] == this.grids[1]) {
        this.grids[13] = this.grids[9];
        this.grids[9] = this.grids[5] + this.grids[1];
        this.grids[5] = 0;
        this.grids[1] = 0;
      } else {
        this.grids[13] = this.grids[9];
        this.grids[9] = this.grids[5];
        this.grids[5] = this.grids[1];
        this.grids[1] = 0;
      }
    } else if (
      this.grids[1] &&
      this.grids[5] &&
      !this.grids[9] &&
      !this.grids[13]
    ) {
      if (this.grids[5] == this.grids[1]) {
        this.grids[13] = this.grids[5] + this.grids[1];
        this.grids[5] = 0;
        this.grids[1] = 0;
      } else {
        this.grids[13] = this.grids[5];
        this.grids[9] = this.grids[1];
        this.grids[5] = 0;
        this.grids[1] = 0;
      }
    } else if (
      this.grids[1] &&
      this.grids[5] &&
      !this.grids[9] &&
      this.grids[13]
    ) {
      if (this.grids[13] == this.grids[5]) {
        this.grids[13] += this.grids[5];
        this.grids[9] = this.grids[1];
        this.grids[5] = 0;
        this.grids[1] = 0;
      } else if (this.grids[1] == this.grids[5]) {
        this.grids[9] = this.grids[5] + this.grids[1];
        this.grids[5] = 0;
        this.grids[1] = 0;
      } else {
        this.grids[9] = this.grids[5];
        this.grids[5] = this.grids[1];
        this.grids[1] = 0;
      }
    }

    // =========================================== 1x1 is true =====================================Bottom
    // =========================================== 2x1 is true =====================================Head
    // if 2x1 is true
    else if (
      !this.grids[1] &&
      this.grids[5] &&
      !this.grids[9] &&
      !this.grids[13]
    ) {
      this.grids[13] = this.grids[5];
      this.grids[5] = 0;
    }
    // if 2x1 & 5x1 is true
    else if (
      !this.grids[1] &&
      this.grids[5] &&
      !this.grids[9] &&
      this.grids[13]
    ) {
      if (this.grids[5] == this.grids[13]) {
        this.grids[13] += this.grids[5];
        this.grids[5] = 0;
      } else {
        this.grids[9] = this.grids[5];
        this.grids[5] = 0;
      }
    }
    // if 2x1 & 3x1 & 5x1 is true
    else if (
      !this.grids[1] &&
      this.grids[5] &&
      this.grids[9] &&
      this.grids[13]
    ) {
      if (this.grids[13] == this.grids[9]) {
        this.grids[13] += this.grids[9];
        this.grids[9] = this.grids[5];
        this.grids[5] = 0;
      } else if (this.grids[5] == this.grids[9]) {
        this.grids[9] += this.grids[5];
        this.grids[5] = 0;
      }
    }
    //if 2x1 & 3x1 is true
    else if (
      !this.grids[1] &&
      this.grids[5] &&
      this.grids[9] &&
      !this.grids[13]
    ) {
      if (this.grids[5] == this.grids[9]) {
        this.grids[13] = this.grids[5] + this.grids[9];
        this.grids[5] = 0;
        this.grids[9] = 0;
      } else {
        this.grids[13] = this.grids[9];
        this.grids[9] = this.grids[5];
        this.grids[5] = 0;
      }
    }
    // =========================================== 2x1 is true =====================================Bottom
    // =========================================== 3x1 is true =====================================Head
    //if 3x1 is true
    else if (
      !this.grids[1] &&
      !this.grids[5] &&
      this.grids[9] &&
      !this.grids[13]
    ) {
      this.grids[13] = this.grids[9];
      this.grids[9] = 0;
    }
    // if 3x1 & 5x1 is true
    else if (
      !this.grids[1] &&
      !this.grids[5] &&
      this.grids[9] &&
      this.grids[13]
    ) {
      if (this.grids[13] == this.grids[9]) {
        this.grids[13] += this.grids[9];
        this.grids[9] = 0;
      }
    }
    // =========================================== 3x1 is true =====================================Bottom
    // ======================
    // =============================================
    // ======================

    // =========================================== 1x1 is true =====================================Head
    //if only 1x1 is true
    if (this.grids[2] && !this.grids[6] && !this.grids[10] && !this.grids[14]) {
      this.grids[14] = this.grids[2];
      this.grids[2] = 0;
    }
    //if 1x1 and 4x1 is true
    else if (
      this.grids[2] &&
      !this.grids[6] &&
      !this.grids[10] &&
      this.grids[14]
    ) {
      if (this.grids[2] == this.grids[14]) {
        this.grids[14] += this.grids[2];
        this.grids[2] = 0;
      } else {
        this.grids[10] = this.grids[2];
        this.grids[2] = 0;
      }
    }
    //if 1x1 & 3x1 & 4x1 is true
    else if (
      this.grids[2] &&
      !this.grids[6] &&
      this.grids[10] &&
      this.grids[14]
    ) {
      if (this.grids[10] == this.grids[14]) {
        this.grids[14] += this.grids[10];
        this.grids[10] = this.grids[2];
        this.grids[2] = 0;
      } else if (this.grids[10] != this.grids[14]) {
        if (this.grids[2] == this.grids[10]) {
          this.grids[10] += this.grids[2];
          this.grids[2] = 0;
        } else {
          this.grids[6] = this.grids[2];
          this.grids[2] = 0;
        }
      }
    }

    //if 1x1 & 2x1 & 3x1 & 4x1 is true
    else if (
      this.grids[2] &&
      this.grids[6] &&
      this.grids[10] &&
      this.grids[14]
    ) {
      if (this.grids[2] == this.grids[6] && this.grids[10] == this.grids[14]) {
        this.grids[14] += this.grids[10];
        this.grids[10] = this.grids[6] + this.grids[2];
        this.grids[6] = 0;
        this.grids[2] = 0;
      } else if (
        this.grids[2] == this.grids[6] &&
        this.grids[10] != this.grids[14]
      ) {
        if (this.grids[6] != this.grids[10]) {
          this.grids[6] += this.grids[2];
          this.grids[2] = 0;
        } else {
          this.grids[10] += this.grids[6];
          this.grids[6] = this.grids[2];
          this.grids[2] = 0;
        }
      } else if (
        this.grids[2] != this.grids[6] &&
        this.grids[10] == this.grids[14]
      ) {
        this.grids[14] += this.grids[10];
        this.grids[10] = this.grids[6];
        this.grids[6] = this.grids[2];
        this.grids[2] = 0;
      } else if (
        this.grids[2] != this.grids[6] &&
        this.grids[10] != this.grids[14] &&
        this.grids[6] == this.grids[10]
      ) {
        this.grids[10] += this.grids[6];
        this.grids[6] = this.grids[2];
        this.grids[2] = 0;
      }
    }
    // if 1x1 & 3x1 is true
    else if (
      this.grids[2] &&
      !this.grids[6] &&
      this.grids[10] &&
      !this.grids[14]
    ) {
      if (this.grids[2] == this.grids[10]) {
        this.grids[14] = this.grids[2] + this.grids[10];
        this.grids[10] = 0;
        this.grids[2] = 0;
      } else {
        this.grids[14] = this.grids[10];
        this.grids[10] = this.grids[2];
        this.grids[2] = 0;
      }
    }

    // if 1x1 & 2x1 & 3x1 is true
    else if (
      this.grids[2] &&
      this.grids[6] &&
      this.grids[10] &&
      !this.grids[14]
    ) {
      if (this.grids[10] == this.grids[6]) {
        this.grids[14] = this.grids[10] + this.grids[6];
        this.grids[10] = this.grids[2];
        this.grids[6] = 0;
        this.grids[2] = 0;
      } else if (this.grids[6] == this.grids[2]) {
        this.grids[14] = this.grids[10];
        this.grids[10] = this.grids[6] + this.grids[2];
        this.grids[6] = 0;
        this.grids[2] = 0;
      } else {
        this.grids[14] = this.grids[10];
        this.grids[10] = this.grids[6];
        this.grids[6] = this.grids[2];
        this.grids[2] = 0;
      }
    } else if (
      this.grids[2] &&
      this.grids[6] &&
      !this.grids[10] &&
      !this.grids[14]
    ) {
      if (this.grids[6] == this.grids[2]) {
        this.grids[14] = this.grids[6] + this.grids[2];
        this.grids[6] = 0;
        this.grids[2] = 0;
      } else {
        this.grids[14] = this.grids[6];
        this.grids[10] = this.grids[2];
        this.grids[6] = 0;
        this.grids[2] = 0;
      }
    } else if (
      this.grids[2] &&
      this.grids[6] &&
      !this.grids[10] &&
      this.grids[14]
    ) {
      if (this.grids[14] == this.grids[6]) {
        this.grids[14] += this.grids[6];
        this.grids[10] = this.grids[2];
        this.grids[6] = 0;
        this.grids[2] = 0;
      } else if (this.grids[2] == this.grids[6]) {
        this.grids[10] = this.grids[6] + this.grids[2];
        this.grids[6] = 0;
        this.grids[2] = 0;
      } else {
        this.grids[10] = this.grids[6];
        this.grids[6] = this.grids[2];
        this.grids[2] = 0;
      }
    }

    // =========================================== 1x1 is true =====================================Bottom
    // =========================================== 2x1 is true =====================================Head
    // if 2x1 is true
    else if (
      !this.grids[2] &&
      this.grids[6] &&
      !this.grids[10] &&
      !this.grids[14]
    ) {
      this.grids[14] = this.grids[6];
      this.grids[6] = 0;
    }
    // if 2x1 & 4x1 is true
    else if (
      !this.grids[2] &&
      this.grids[6] &&
      !this.grids[10] &&
      this.grids[14]
    ) {
      if (this.grids[6] == this.grids[14]) {
        this.grids[14] += this.grids[6];
        this.grids[6] = 0;
      } else {
        this.grids[10] = this.grids[6];
        this.grids[6] = 0;
      }
    }
    // if 2x1 & 3x1 & 4x1 is true
    else if (
      !this.grids[2] &&
      this.grids[6] &&
      this.grids[10] &&
      this.grids[14]
    ) {
      if (this.grids[14] == this.grids[10]) {
        this.grids[14] += this.grids[10];
        this.grids[10] = this.grids[6];
        this.grids[6] = 0;
      } else if (this.grids[6] == this.grids[10]) {
        this.grids[10] += this.grids[6];
        this.grids[6] = 0;
      }
    }
    //if 2x1 & 3x1 is true
    else if (
      !this.grids[2] &&
      this.grids[6] &&
      this.grids[10] &&
      !this.grids[14]
    ) {
      if (this.grids[6] == this.grids[10]) {
        this.grids[14] = this.grids[6] + this.grids[10];
        this.grids[6] = 0;
        this.grids[10] = 0;
      } else {
        this.grids[14] = this.grids[10];
        this.grids[10] = this.grids[6];
        this.grids[6] = 0;
      }
    }
    // =========================================== 2x1 is true =====================================Bottom
    // =========================================== 3x1 is true =====================================Head
    //if 3x1 is true
    else if (
      !this.grids[2] &&
      !this.grids[6] &&
      this.grids[10] &&
      !this.grids[14]
    ) {
      this.grids[14] = this.grids[10];
      this.grids[10] = 0;
    }
    // if 3x1 & 4x1 is true
    else if (
      !this.grids[2] &&
      !this.grids[6] &&
      this.grids[10] &&
      this.grids[14]
    ) {
      if (this.grids[14] == this.grids[10]) {
        this.grids[14] += this.grids[10];
        this.grids[10] = 0;
      }
    }
    // =========================================== 3x1 is true =====================================Bottom
    // ======================
    // =============================================
    // ======================
    // =========================================== 1x1 is true =====================================Head
    //if only 1x1 is true
    if (this.grids[3] && !this.grids[7] && !this.grids[11] && !this.grids[15]) {
      this.grids[15] = this.grids[3];
      this.grids[3] = 0;
    }
    //if 1x1 and 4x1 is true
    else if (
      this.grids[3] &&
      !this.grids[7] &&
      !this.grids[11] &&
      this.grids[15]
    ) {
      if (this.grids[3] == this.grids[15]) {
        this.grids[15] += this.grids[3];
        this.grids[3] = 0;
      } else {
        this.grids[11] = this.grids[3];
        this.grids[3] = 0;
      }
    }
    //if 1x1 & 3x1 & 4x1 is true
    else if (
      this.grids[3] &&
      !this.grids[7] &&
      this.grids[11] &&
      this.grids[15]
    ) {
      if (this.grids[11] == this.grids[15]) {
        this.grids[15] += this.grids[11];
        this.grids[11] = this.grids[3];
        this.grids[3] = 0;
      } else if (this.grids[11] != this.grids[15]) {
        if (this.grids[3] == this.grids[11]) {
          this.grids[11] += this.grids[3];
          this.grids[3] = 0;
        } else {
          this.grids[7] = this.grids[3];
          this.grids[3] = 0;
        }
      }
    } else if (
      this.grids[3] &&
      this.grids[7] &&
      !this.grids[11] &&
      this.grids[15]
    ) {
      if (this.grids[15] == this.grids[7]) {
        this.grids[15] += this.grids[7];
        this.grids[11] = this.grids[3];
        this.grids[7] = 0;
        this.grids[3] = 0;
      } else if (this.grids[3] == this.grids[7]) {
        this.grids[11] = this.grids[7] + this.grids[3];
        this.grids[7] = 0;
        this.grids[3] = 0;
      } else {
        this.grids[11] = this.grids[7];
        this.grids[7] = this.grids[3];
        this.grids[3] = 0;
      }
    }

    //if 1x1 & 2x1 & 3x1 & 4x1 is true
    else if (
      this.grids[3] &&
      this.grids[7] &&
      this.grids[11] &&
      this.grids[15]
    ) {
      if (this.grids[3] == this.grids[7] && this.grids[11] == this.grids[15]) {
        this.grids[15] += this.grids[11];
        this.grids[11] = this.grids[7] + this.grids[3];
        this.grids[7] = 0;
        this.grids[3] = 0;
      } else if (
        this.grids[3] == this.grids[7] &&
        this.grids[11] != this.grids[15]
      ) {
        if (this.grids[7] != this.grids[11]) {
          this.grids[7] += this.grids[3];
          this.grids[3] = 0;
        } else {
          this.grids[11] += this.grids[7];
          this.grids[7] = this.grids[3];
          this.grids[3] = 0;
        }
      } else if (
        this.grids[3] != this.grids[7] &&
        this.grids[11] == this.grids[15]
      ) {
        this.grids[15] += this.grids[11];
        this.grids[11] = this.grids[7];
        this.grids[7] = this.grids[3];
        this.grids[3] = 0;
      } else if (
        this.grids[3] != this.grids[7] &&
        this.grids[11] != this.grids[15] &&
        this.grids[7] == this.grids[11]
      ) {
        this.grids[11] += this.grids[7];
        this.grids[7] = this.grids[3];
        this.grids[3] = 0;
      }
    }
    // if 1x1 & 3x1 is true
    else if (
      this.grids[3] &&
      !this.grids[7] &&
      this.grids[11] &&
      !this.grids[15]
    ) {
      if (this.grids[3] == this.grids[11]) {
        this.grids[15] = this.grids[3] + this.grids[11];
        this.grids[11] = 0;
        this.grids[3] = 0;
      } else {
        this.grids[15] = this.grids[11];
        this.grids[11] = this.grids[3];
        this.grids[3] = 0;
      }
    }

    // if 1x1 & 2x1 & 3x1 is true
    else if (
      this.grids[3] &&
      this.grids[7] &&
      this.grids[11] &&
      !this.grids[15]
    ) {
      if (this.grids[11] == this.grids[7]) {
        this.grids[15] = this.grids[11] + this.grids[7];
        this.grids[11] = this.grids[3];
        this.grids[7] = 0;
        this.grids[3] = 0;
      } else if (this.grids[7] == this.grids[3]) {
        this.grids[15] = this.grids[11];
        this.grids[11] = this.grids[7] + this.grids[3];
        this.grids[7] = 0;
        this.grids[3] = 0;
      } else {
        this.grids[15] = this.grids[11];
        this.grids[11] = this.grids[7];
        this.grids[7] = this.grids[3];
        this.grids[3] = 0;
      }
    } else if (
      this.grids[3] &&
      this.grids[7] &&
      !this.grids[11] &&
      !this.grids[15]
    ) {
      if (this.grids[7] == this.grids[3]) {
        this.grids[15] = this.grids[7] + this.grids[3];
        this.grids[7] = 0;
        this.grids[3] = 0;
      } else {
        this.grids[15] = this.grids[7];
        this.grids[11] = this.grids[3];
        this.grids[7] = 0;
        this.grids[3] = 0;
      }
    } else if (
      this.grids[2] &&
      this.grids[6] &&
      !this.grids[10] &&
      this.grids[14]
    ) {
      if (this.grids[14] == this.grids[6]) {
        this.grids[14] += this.grids[6];
        this.grids[10] = this.grids[2];
        this.grids[6] = 0;
        this.grids[2] = 0;
      } else if (this.grids[2] == this.grids[6]) {
        this.grids[10] = this.grids[6] + this.grids[2];
        this.grids[6] = 0;
        this.grids[2] = 0;
      } else {
        this.grids[10] = this.grids[6];
        this.grids[6] = this.grids[2];
        this.grids[2] = 0;
      }
    }
    // =========================================== 1x1 is true =====================================Bottom
    // =========================================== 2x1 is true =====================================Head
    // if 2x1 is true
    else if (
      !this.grids[3] &&
      this.grids[7] &&
      !this.grids[11] &&
      !this.grids[15]
    ) {
      this.grids[15] = this.grids[7];
      this.grids[7] = 0;
    }
    // if 2x1 & 4x1 is true
    else if (
      !this.grids[3] &&
      this.grids[7] &&
      !this.grids[11] &&
      this.grids[15]
    ) {
      if (this.grids[7] == this.grids[15]) {
        this.grids[15] += this.grids[7];
        this.grids[7] = 0;
      } else {
        this.grids[11] = this.grids[7];
        this.grids[7] = 0;
      }
    }
    // if 2x1 & 3x1 & 4x1 is true
    else if (
      !this.grids[3] &&
      this.grids[7] &&
      this.grids[11] &&
      this.grids[15]
    ) {
      if (this.grids[15] == this.grids[11]) {
        this.grids[15] += this.grids[11];
        this.grids[11] = this.grids[7];
        this.grids[7] = 0;
      } else if (this.grids[7] == this.grids[11]) {
        this.grids[11] += this.grids[7];
        this.grids[7] = 0;
      }
    }
    //if 2x1 & 3x1 is true
    else if (
      !this.grids[3] &&
      this.grids[7] &&
      this.grids[11] &&
      !this.grids[15]
    ) {
      if (this.grids[7] == this.grids[11]) {
        this.grids[15] = this.grids[7] + this.grids[11];
        this.grids[7] = 0;
        this.grids[11] = 0;
      } else {
        this.grids[15] = this.grids[11];
        this.grids[11] = this.grids[7];
        this.grids[7] = 0;
      }
    }
    // =========================================== 2x1 is true =====================================Bottom
    // =========================================== 3x1 is true =====================================Head
    //if 3x1 is true
    else if (
      !this.grids[3] &&
      !this.grids[7] &&
      this.grids[11] &&
      !this.grids[15]
    ) {
      this.grids[15] = this.grids[11];
      this.grids[11] = 0;
    }
    // if 3x1 & 4x1 is true
    else if (
      !this.grids[3] &&
      !this.grids[7] &&
      this.grids[11] &&
      this.grids[15]
    ) {
      if (this.grids[15] == this.grids[11]) {
        this.grids[15] += this.grids[11];
        this.grids[11] = 0;
      }
    }


    
    // =========================================== 3x1 is true =====================================Bottom
  }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////UUUUUPPPPPPPPSSSSSSSIIIIIIIIIIDDDDDDDDDEEEEEEEEEEE///////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  @HostListener('document:keydown.arrowUp', ['$event'])
  onKeyUp(event: KeyboardEvent) {
    // =========================================== 1x1 is true =====================================Head
    //if only 1x1 is true
    if (this.grids[12] && !this.grids[8] && !this.grids[4] && !this.grids[0]) {
      this.grids[0] = this.grids[12];
      this.grids[12] = 0;
    }
    //if 1x1 and 4x1 is true
    else if (
      this.grids[12] &&
      !this.grids[8] &&
      !this.grids[4] &&
      this.grids[0]
    ) {
      if (this.grids[12] == this.grids[0]) {
        this.grids[0] += this.grids[12];
        this.grids[12] = 0;
      } else {
        this.grids[4] = this.grids[12];
        this.grids[12] = 0;
      }
    }
    //if 1x1 & 3x1 & 4x1 is true
    else if (
      this.grids[12] &&
      !this.grids[8] &&
      this.grids[4] &&
      this.grids[0]
    ) {
      if (this.grids[4] == this.grids[0]) {
        this.grids[0] += this.grids[4];
        this.grids[4] = this.grids[12];
        this.grids[12] = 0;
      } else if (this.grids[4] != this.grids[0]) {
        if (this.grids[12] == this.grids[4]) {
          this.grids[4] += this.grids[12];
          this.grids[12] = 0;
        } else {
          this.grids[8] = this.grids[12];
          this.grids[12] = 0;
        }
      }
    }

    //if 1x1 & 2x1 & 3x1 & 4x1 is true
    else if (
      this.grids[12] &&
      this.grids[8] &&
      this.grids[4] &&
      this.grids[0]
    ) {
      if (this.grids[12] == this.grids[8] && this.grids[4] == this.grids[0]) {
        this.grids[0] += this.grids[4];
        this.grids[4] = this.grids[8] + this.grids[12];
        this.grids[8] = 0;
        this.grids[12] = 0;
      } else if (
        this.grids[12] == this.grids[8] &&
        this.grids[4] != this.grids[0]
      ) {
        if (this.grids[8] != this.grids[4]) {
          this.grids[8] += this.grids[12];
          this.grids[12] = 0;
        } else {
          this.grids[4] += this.grids[8];
          this.grids[8] = this.grids[12];
          this.grids[12] = 0;
        }
      } else if (
        this.grids[12] != this.grids[8] &&
        this.grids[4] == this.grids[0]
      ) {
        this.grids[0] += this.grids[4];
        this.grids[4] = this.grids[8];
        this.grids[8] = this.grids[12];
        this.grids[12] = 0;
      } else if (
        this.grids[12] != this.grids[8] &&
        this.grids[4] != this.grids[0] &&
        this.grids[8] == this.grids[4]
      ) {
        this.grids[4] += this.grids[8];
        this.grids[8] = this.grids[12];
        this.grids[12] = 0;
      }
    }
    // if 1x1 & 3x1 is true
    else if (
      this.grids[12] &&
      !this.grids[8] &&
      this.grids[4] &&
      !this.grids[0]
    ) {
      if (this.grids[12] == this.grids[4]) {
        this.grids[0] = this.grids[12] + this.grids[4];
        this.grids[4] = 0;
        this.grids[12] = 0;
      } else {
        this.grids[0] = this.grids[4];
        this.grids[4] = this.grids[12];
        this.grids[12] = 0;
      }
    }

    // if 1x1 & 2x1 & 3x1 is true
    else if (
      this.grids[12] &&
      this.grids[8] &&
      this.grids[4] &&
      !this.grids[0]
    ) {
      if (this.grids[4] == this.grids[8]) {
        this.grids[0] = this.grids[4] + this.grids[8];
        this.grids[4] = this.grids[12];
        this.grids[8] = 0;
        this.grids[12] = 0;
      } else if (this.grids[8] == this.grids[12]) {
        this.grids[0] = this.grids[4];
        this.grids[4] = this.grids[8] + this.grids[12];
        this.grids[8] = 0;
        this.grids[12] = 0;
      } else {
        this.grids[0] = this.grids[4];
        this.grids[4] = this.grids[8];
        this.grids[8] = this.grids[12];
        this.grids[12] = 0;
      }
    }
    // if 1x1 & 2x1 is true
    else if (
      this.grids[12] &&
      this.grids[8] &&
      !this.grids[4] &&
      !this.grids[0]
    ) {
      if (this.grids[8] == this.grids[12]) {
        this.grids[0] = this.grids[8] + this.grids[12];
        this.grids[8] = 0;
        this.grids[12] = 0;
      } else {
        this.grids[0] = this.grids[8];
        this.grids[4] = this.grids[12];
        this.grids[8] = 0;
        this.grids[12] = 0;
      }
    }
    // if 1x1 & 2x1 & 4x1 is true
    else if (
      this.grids[12] &&
      this.grids[8] &&
      !this.grids[4] &&
      this.grids[0]
    ) {
      if (this.grids[0] == this.grids[8]) {
        this.grids[0] += this.grids[8];
        this.grids[4] = this.grids[12];
        this.grids[8] = 0;
        this.grids[12] = 0;
      } else if (this.grids[12] == this.grids[8]) {
        this.grids[4] = this.grids[8] + this.grids[12];
        this.grids[8] = 0;
        this.grids[12] = 0;
      } else {
        this.grids[4] = this.grids[8];
        this.grids[8] = this.grids[12];
        this.grids[12] = 0;
      }
    }

    // =========================================== 1x1 is true =====================================Bottom
    // =========================================== 2x1 is true =====================================Head
    // if 2x1 is true
    else if (
      !this.grids[12] &&
      this.grids[8] &&
      !this.grids[4] &&
      !this.grids[0]
    ) {
      this.grids[0] = this.grids[8];
      this.grids[8] = 0;
    }
    // if 2x1 & 4x1 is true
    else if (
      !this.grids[12] &&
      this.grids[8] &&
      !this.grids[4] &&
      this.grids[0]
    ) {
      if (this.grids[8] == this.grids[0]) {
        this.grids[0] += this.grids[8];
        this.grids[8] = 0;
      } else {
        this.grids[4] = this.grids[8];
        this.grids[8] = 0;
      }
    }
    // if 2x1 & 3x1 & 4x1 is true
    else if (
      !this.grids[12] &&
      this.grids[8] &&
      this.grids[4] &&
      this.grids[0]
    ) {
      if (this.grids[0] == this.grids[4]) {
        this.grids[0] += this.grids[4];
        this.grids[4] = this.grids[8];
        this.grids[8] = 0;
      } else if (this.grids[8] == this.grids[4]) {
        this.grids[4] += this.grids[8];
        this.grids[8] = 0;
      }
    }
    //if 2x1 & 3x1 is true
    else if (
      !this.grids[12] &&
      this.grids[8] &&
      this.grids[4] &&
      !this.grids[0]
    ) {
      if (this.grids[8] == this.grids[4]) {
        this.grids[0] = this.grids[8] + this.grids[4];
        this.grids[8] = 0;
        this.grids[4] = 0;
      } else {
        this.grids[0] = this.grids[4];
        this.grids[4] = this.grids[8];
        this.grids[8] = 0;
      }
    }
    // =========================================== 2x1 is true =====================================Bottom
    // =========================================== 3x1 is true =====================================Head
    //if 3x1 is true
    else if (
      !this.grids[12] &&
      !this.grids[8] &&
      this.grids[4] &&
      !this.grids[0]
    ) {
      this.grids[0] = this.grids[4];
      this.grids[4] = 0;
    }
    // if 3x1 & 4x1 is true
    else if (
      !this.grids[12] &&
      !this.grids[8] &&
      this.grids[4] &&
      this.grids[0]
    ) {
      if (this.grids[0] == this.grids[4]) {
        this.grids[0] += this.grids[4];
        this.grids[4] = 0;
      }
    }
    // =========================================== 3x1 is true =====================================Bottom
    // ======================
    // =============================================
    // ======================

    // =========================================== 1x1 is true =====================================Head
    //if only 1x1 is true
    if (this.grids[13] && !this.grids[9] && !this.grids[5] && !this.grids[1]) {
      this.grids[1] = this.grids[13];
      this.grids[13] = 0;
    }
    //if 1x1 and 5x1 is true
    else if (
      this.grids[13] &&
      !this.grids[9] &&
      !this.grids[5] &&
      this.grids[1]
    ) {
      if (this.grids[13] == this.grids[1]) {
        this.grids[1] += this.grids[13];
        this.grids[13] = 0;
      } else {
        this.grids[5] = this.grids[13];
        this.grids[13] = 0;
      }
    }
    //if 1x1 & 3x1 & 5x1 is true
    else if (
      this.grids[13] &&
      !this.grids[9] &&
      this.grids[5] &&
      this.grids[1]
    ) {
      if (this.grids[5] == this.grids[1]) {
        this.grids[1] += this.grids[5];
        this.grids[5] = this.grids[13];
        this.grids[13] = 0;
      } else if (this.grids[5] != this.grids[1]) {
        if (this.grids[13] == this.grids[5]) {
          this.grids[5] += this.grids[13];
          this.grids[13] = 0;
        } else {
          this.grids[9] = this.grids[13];
          this.grids[13] = 0;
        }
      }
    }

    //if 1x1 & 2x1 & 3x1 & 5x1 is true
    else if (
      this.grids[13] &&
      this.grids[9] &&
      this.grids[5] &&
      this.grids[1]
    ) {
      if (this.grids[13] == this.grids[9] && this.grids[5] == this.grids[1]) {
        this.grids[1] += this.grids[5];
        this.grids[5] = this.grids[9] + this.grids[13];
        this.grids[9] = 0;
        this.grids[13] = 0;
      } else if (
        this.grids[13] == this.grids[9] &&
        this.grids[5] != this.grids[1]
      ) {
        if (this.grids[9] != this.grids[5]) {
          this.grids[9] += this.grids[13];
          this.grids[13] = 0;
        } else {
          this.grids[5] += this.grids[9];
          this.grids[9] = this.grids[13];
          this.grids[13] = 0;
        }
      } else if (
        this.grids[13] != this.grids[9] &&
        this.grids[5] == this.grids[1]
      ) {
        this.grids[1] += this.grids[5];
        this.grids[5] = this.grids[9];
        this.grids[9] = this.grids[13];
        this.grids[13] = 0;
      } else if (
        this.grids[13] != this.grids[9] &&
        this.grids[5] != this.grids[1] &&
        this.grids[9] == this.grids[5]
      ) {
        this.grids[5] += this.grids[9];
        this.grids[9] = this.grids[13];
        this.grids[13] = 0;
      }
    }
    // if 1x1 & 3x1 is true
    else if (
      this.grids[13] &&
      !this.grids[9] &&
      this.grids[5] &&
      !this.grids[1]
    ) {
      if (this.grids[13] == this.grids[5]) {
        this.grids[1] = this.grids[13] + this.grids[5];
        this.grids[5] = 0;
        this.grids[13] = 0;
      } else {
        this.grids[1] = this.grids[5];
        this.grids[5] = this.grids[13];
        this.grids[13] = 0;
      }
    }

    // if 1x1 & 2x1 & 3x1 is true
    else if (
      this.grids[13] &&
      this.grids[9] &&
      this.grids[5] &&
      !this.grids[1]
    ) {
      if (this.grids[5] == this.grids[9]) {
        this.grids[1] = this.grids[5] + this.grids[9];
        this.grids[5] = this.grids[13];
        this.grids[9] = 0;
        this.grids[13] = 0;
      } else if (this.grids[9] == this.grids[13]) {
        this.grids[1] = this.grids[5];
        this.grids[5] = this.grids[9] + this.grids[13];
        this.grids[9] = 0;
        this.grids[13] = 0;
      } else {
        this.grids[1] = this.grids[5];
        this.grids[5] = this.grids[9];
        this.grids[9] = this.grids[13];
        this.grids[13] = 0;
      }
    } else if (
      this.grids[13] &&
      this.grids[9] &&
      !this.grids[5] &&
      !this.grids[1]
    ) {
      if (this.grids[9] == this.grids[13]) {
        this.grids[1] = this.grids[9] + this.grids[13];
        this.grids[9] = 0;
        this.grids[13] = 0;
      } else {
        this.grids[1] = this.grids[9];
        this.grids[5] = this.grids[13];
        this.grids[9] = 0;
        this.grids[13] = 0;
      }
    } else if (
      this.grids[13] &&
      this.grids[9] &&
      !this.grids[5] &&
      this.grids[1]
    ) {
      if (this.grids[1] == this.grids[9]) {
        this.grids[1] += this.grids[9];
        this.grids[5] = this.grids[13];
        this.grids[9] = 0;
        this.grids[13] = 0;
      } else if (this.grids[13] == this.grids[9]) {
        this.grids[5] = this.grids[9] + this.grids[13];
        this.grids[9] = 0;
        this.grids[13] = 0;
      } else {
        this.grids[5] = this.grids[9];
        this.grids[9] = this.grids[13];
        this.grids[13] = 0;
      }
    }

    // =========================================== 1x1 is true =====================================Bottom
    // =========================================== 2x1 is true =====================================Head
    // if 2x1 is true
    else if (
      !this.grids[13] &&
      this.grids[9] &&
      !this.grids[5] &&
      !this.grids[1]
    ) {
      this.grids[1] = this.grids[9];
      this.grids[9] = 0;
    }
    // if 2x1 & 5x1 is true
    else if (
      !this.grids[13] &&
      this.grids[9] &&
      !this.grids[5] &&
      this.grids[1]
    ) {
      if (this.grids[9] == this.grids[1]) {
        this.grids[1] += this.grids[9];
        this.grids[9] = 0;
      } else {
        this.grids[5] = this.grids[9];
        this.grids[9] = 0;
      }
    }
    // if 2x1 & 3x1 & 5x1 is true
    else if (
      !this.grids[13] &&
      this.grids[9] &&
      this.grids[5] &&
      this.grids[1]
    ) {
      if (this.grids[1] == this.grids[5]) {
        this.grids[1] += this.grids[5];
        this.grids[5] = this.grids[9];
        this.grids[9] = 0;
      } else if (this.grids[9] == this.grids[5]) {
        this.grids[5] += this.grids[9];
        this.grids[9] = 0;
      }
    }
    //if 2x1 & 3x1 is true
    else if (
      !this.grids[13] &&
      this.grids[9] &&
      this.grids[5] &&
      !this.grids[1]
    ) {
      if (this.grids[9] == this.grids[5]) {
        this.grids[1] = this.grids[9] + this.grids[5];
        this.grids[9] = 0;
        this.grids[5] = 0;
      } else {
        this.grids[1] = this.grids[5];
        this.grids[5] = this.grids[9];
        this.grids[9] = 0;
      }
    }
    // =========================================== 2x1 is true =====================================Bottom
    // =========================================== 3x1 is true =====================================Head
    //if 3x1 is true
    else if (
      !this.grids[13] &&
      !this.grids[9] &&
      this.grids[5] &&
      !this.grids[1]
    ) {
      this.grids[1] = this.grids[5];
      this.grids[5] = 0;
    }
    // if 3x1 & 5x1 is true
    else if (
      !this.grids[13] &&
      !this.grids[9] &&
      this.grids[5] &&
      this.grids[1]
    ) {
      if (this.grids[1] == this.grids[5]) {
        this.grids[1] += this.grids[5];
        this.grids[5] = 0;
      }
    }
    // =========================================== 3x1 is true =====================================Bottom
    // ======================
    // =============================================
    // ======================

    // =========================================== 1x1 is true =====================================Head
    //if only 1x1 is true
    if (this.grids[14] && !this.grids[10] && !this.grids[6] && !this.grids[2]) {
      this.grids[2] = this.grids[14];
      this.grids[14] = 0;
    }
    //if 1x1 and 4x1 is true
    else if (
      this.grids[14] &&
      !this.grids[10] &&
      !this.grids[6] &&
      this.grids[2]
    ) {
      if (this.grids[14] == this.grids[2]) {
        this.grids[2] += this.grids[14];
        this.grids[14] = 0;
      } else {
        this.grids[6] = this.grids[14];
        this.grids[14] = 0;
      }
    }
    //if 1x1 & 3x1 & 4x1 is true
    else if (
      this.grids[14] &&
      !this.grids[10] &&
      this.grids[6] &&
      this.grids[2]
    ) {
      if (this.grids[6] == this.grids[2]) {
        this.grids[2] += this.grids[6];
        this.grids[6] = this.grids[14];
        this.grids[14] = 0;
      } else if (this.grids[6] != this.grids[2]) {
        if (this.grids[14] == this.grids[6]) {
          this.grids[6] += this.grids[14];
          this.grids[14] = 0;
        } else {
          this.grids[10] = this.grids[14];
          this.grids[14] = 0;
        }
      }
    }

    //if 1x1 & 2x1 & 3x1 & 4x1 is true
    else if (
      this.grids[14] &&
      this.grids[10] &&
      this.grids[6] &&
      this.grids[2]
    ) {
      if (this.grids[14] == this.grids[10] && this.grids[6] == this.grids[2]) {
        this.grids[2] += this.grids[6];
        this.grids[6] = this.grids[10] + this.grids[14];
        this.grids[10] = 0;
        this.grids[14] = 0;
      } else if (
        this.grids[14] == this.grids[10] &&
        this.grids[6] != this.grids[2]
      ) {
        if (this.grids[10] != this.grids[6]) {
          this.grids[10] += this.grids[14];
          this.grids[14] = 0;
        } else {
          this.grids[6] += this.grids[10];
          this.grids[10] = this.grids[14];
          this.grids[14] = 0;
        }
      } else if (
        this.grids[14] != this.grids[10] &&
        this.grids[6] == this.grids[2]
      ) {
        this.grids[2] += this.grids[6];
        this.grids[6] = this.grids[10];
        this.grids[10] = this.grids[14];
        this.grids[14] = 0;
      } else if (
        this.grids[14] != this.grids[10] &&
        this.grids[6] != this.grids[2] &&
        this.grids[10] == this.grids[6]
      ) {
        this.grids[6] += this.grids[10];
        this.grids[10] = this.grids[14];
        this.grids[14] = 0;
      }
    }
    // if 1x1 & 3x1 is true
    else if (
      this.grids[14] &&
      !this.grids[10] &&
      this.grids[6] &&
      !this.grids[2]
    ) {
      if (this.grids[14] == this.grids[6]) {
        this.grids[2] = this.grids[14] + this.grids[6];
        this.grids[6] = 0;
        this.grids[14] = 0;
      } else {
        this.grids[2] = this.grids[6];
        this.grids[6] = this.grids[14];
        this.grids[14] = 0;
      }
    }

    // if 1x1 & 2x1 & 3x1 is true
    else if (
      this.grids[14] &&
      this.grids[10] &&
      this.grids[6] &&
      !this.grids[2]
    ) {
      if (this.grids[6] == this.grids[10]) {
        this.grids[2] = this.grids[6] + this.grids[10];
        this.grids[6] = this.grids[14];
        this.grids[10] = 0;
        this.grids[14] = 0;
      } else if (this.grids[10] == this.grids[14]) {
        this.grids[2] = this.grids[6];
        this.grids[6] = this.grids[10] + this.grids[14];
        this.grids[10] = 0;
        this.grids[14] = 0;
      } else {
        this.grids[2] = this.grids[6];
        this.grids[6] = this.grids[10];
        this.grids[10] = this.grids[14];
        this.grids[14] = 0;
      }
    } else if (
      this.grids[14] &&
      this.grids[10] &&
      !this.grids[6] &&
      !this.grids[2]
    ) {
      if (this.grids[10] == this.grids[14]) {
        this.grids[2] = this.grids[10] + this.grids[14];
        this.grids[10] = 0;
        this.grids[14] = 0;
      } else {
        this.grids[2] = this.grids[10];
        this.grids[6] = this.grids[14];
        this.grids[10] = 0;
        this.grids[14] = 0;
      }
    } else if (
      this.grids[14] &&
      this.grids[10] &&
      !this.grids[6] &&
      this.grids[2]
    ) {
      if (this.grids[2] == this.grids[10]) {
        this.grids[2] += this.grids[10];
        this.grids[6] = this.grids[14];
        this.grids[10] = 0;
        this.grids[14] = 0;
      } else if (this.grids[14] == this.grids[10]) {
        this.grids[6] = this.grids[10] + this.grids[14];
        this.grids[10] = 0;
        this.grids[14] = 0;
      } else {
        this.grids[6] = this.grids[10];
        this.grids[10] = this.grids[14];
        this.grids[14] = 0;
      }
    }

    // =========================================== 1x1 is true =====================================Bottom
    // =========================================== 2x1 is true =====================================Head
    // if 2x1 is true
    else if (
      !this.grids[14] &&
      this.grids[10] &&
      !this.grids[6] &&
      !this.grids[2]
    ) {
      this.grids[2] = this.grids[10];
      this.grids[10] = 0;
    }
    // if 2x1 & 4x1 is true
    else if (
      !this.grids[14] &&
      this.grids[10] &&
      !this.grids[6] &&
      this.grids[2]
    ) {
      if (this.grids[10] == this.grids[2]) {
        this.grids[2] += this.grids[10];
        this.grids[10] = 0;
      } else {
        this.grids[6] = this.grids[10];
        this.grids[10] = 0;
      }
    }
    // if 2x1 & 3x1 & 4x1 is true
    else if (
      !this.grids[14] &&
      this.grids[10] &&
      this.grids[6] &&
      this.grids[2]
    ) {
      if (this.grids[2] == this.grids[6]) {
        this.grids[2] += this.grids[6];
        this.grids[6] = this.grids[10];
        this.grids[10] = 0;
      } else if (this.grids[10] == this.grids[6]) {
        this.grids[6] += this.grids[10];
        this.grids[10] = 0;
      }
    }
    //if 2x1 & 3x1 is true
    else if (
      !this.grids[14] &&
      this.grids[10] &&
      this.grids[6] &&
      !this.grids[2]
    ) {
      if (this.grids[10] == this.grids[6]) {
        this.grids[2] = this.grids[10] + this.grids[6];
        this.grids[10] = 0;
        this.grids[6] = 0;
      } else {
        this.grids[2] = this.grids[6];
        this.grids[6] = this.grids[10];
        this.grids[10] = 0;
      }
    }
    // =========================================== 2x1 is true =====================================Bottom
    // =========================================== 3x1 is true =====================================Head
    //if 3x1 is true
    else if (
      !this.grids[14] &&
      !this.grids[10] &&
      this.grids[6] &&
      !this.grids[2]
    ) {
      this.grids[2] = this.grids[6];
      this.grids[6] = 0;
    }
    // if 3x1 & 4x1 is true
    else if (
      !this.grids[14] &&
      !this.grids[10] &&
      this.grids[6] &&
      this.grids[2]
    ) {
      if (this.grids[2] == this.grids[6]) {
        this.grids[2] += this.grids[6];
        this.grids[6] = 0;
      }
    }
    // =========================================== 3x1 is true =====================================Bottom
    // ======================
    // =============================================
    // ======================
    // =========================================== 1x1 is true =====================================Head
    //if only 1x1 is true
    if (this.grids[15] && !this.grids[11] && !this.grids[7] && !this.grids[3]) {
      this.grids[3] = this.grids[15];
      this.grids[15] = 0;
    }
    //if 1x1 and 4x1 is true
    else if (
      this.grids[15] &&
      !this.grids[11] &&
      !this.grids[7] &&
      this.grids[3]
    ) {
      if (this.grids[15] == this.grids[3]) {
        this.grids[3] += this.grids[15];
        this.grids[15] = 0;
      } else {
        this.grids[7] = this.grids[15];
        this.grids[15] = 0;
      }
    }
    //if 1x1 & 3x1 & 4x1 is true
    else if (
      this.grids[15] &&
      !this.grids[11] &&
      this.grids[7] &&
      this.grids[3]
    ) {
      if (this.grids[7] == this.grids[3]) {
        this.grids[3] += this.grids[7];
        this.grids[7] = this.grids[15];
        this.grids[15] = 0;
      } else if (this.grids[7] != this.grids[3]) {
        if (this.grids[15] == this.grids[7]) {
          this.grids[7] += this.grids[15];
          this.grids[15] = 0;
        } else {
          this.grids[11] = this.grids[15];
          this.grids[15] = 0;
        }
      }
    } else if (
      this.grids[15] &&
      this.grids[11] &&
      !this.grids[7] &&
      this.grids[3]
    ) {
      if (this.grids[3] == this.grids[11]) {
        this.grids[3] += this.grids[11];
        this.grids[7] = this.grids[15];
        this.grids[11] = 0;
        this.grids[15] = 0;
      } else if (this.grids[15] == this.grids[11]) {
        this.grids[7] = this.grids[11] + this.grids[15];
        this.grids[11] = 0;
        this.grids[15] = 0;
      } else {
        this.grids[7] = this.grids[11];
        this.grids[11] = this.grids[15];
        this.grids[15] = 0;
      }
    }

    //if 1x1 & 2x1 & 3x1 & 4x1 is true
    else if (
      this.grids[15] &&
      this.grids[11] &&
      this.grids[7] &&
      this.grids[3]
    ) {
      if (this.grids[15] == this.grids[11] && this.grids[7] == this.grids[3]) {
        this.grids[3] += this.grids[7];
        this.grids[7] = this.grids[11] + this.grids[15];
        this.grids[11] = 0;
        this.grids[15] = 0;
      } else if (
        this.grids[15] == this.grids[11] &&
        this.grids[7] != this.grids[3]
      ) {
        if (this.grids[11] != this.grids[7]) {
          this.grids[11] += this.grids[15];
          this.grids[15] = 0;
        } else {
          this.grids[7] += this.grids[11];
          this.grids[11] = this.grids[15];
          this.grids[15] = 0;
        }
      } else if (
        this.grids[15] != this.grids[11] &&
        this.grids[7] == this.grids[3]
      ) {
        this.grids[3] += this.grids[7];
        this.grids[7] = this.grids[11];
        this.grids[11] = this.grids[15];
        this.grids[15] = 0;
      } else if (
        this.grids[15] != this.grids[11] &&
        this.grids[7] != this.grids[3] &&
        this.grids[11] == this.grids[7]
      ) {
        this.grids[7] += this.grids[11];
        this.grids[11] = this.grids[15];
        this.grids[15] = 0;
      }
    }
    // if 1x1 & 3x1 is true
    else if (
      this.grids[15] &&
      !this.grids[11] &&
      this.grids[7] &&
      !this.grids[3]
    ) {
      if (this.grids[15] == this.grids[7]) {
        this.grids[3] = this.grids[15] + this.grids[7];
        this.grids[7] = 0;
        this.grids[15] = 0;
      } else {
        this.grids[3] = this.grids[7];
        this.grids[7] = this.grids[15];
        this.grids[15] = 0;
      }
    }

    // if 1x1 & 2x1 & 3x1 is true
    else if (
      this.grids[15] &&
      this.grids[11] &&
      this.grids[7] &&
      !this.grids[3]
    ) {
      if (this.grids[7] == this.grids[11]) {
        this.grids[3] = this.grids[7] + this.grids[11];
        this.grids[7] = this.grids[15];
        this.grids[11] = 0;
        this.grids[15] = 0;
      } else if (this.grids[11] == this.grids[15]) {
        this.grids[3] = this.grids[7];
        this.grids[7] = this.grids[11] + this.grids[15];
        this.grids[11] = 0;
        this.grids[15] = 0;
      } else {
        this.grids[3] = this.grids[7];
        this.grids[7] = this.grids[11];
        this.grids[11] = this.grids[15];
        this.grids[15] = 0;
      }
    } else if (
      this.grids[15] &&
      this.grids[11] &&
      !this.grids[7] &&
      !this.grids[3]
    ) {
      if (this.grids[11] == this.grids[15]) {
        this.grids[3] = this.grids[11] + this.grids[15];
        this.grids[11] = 0;
        this.grids[15] = 0;
      } else {
        this.grids[3] = this.grids[11];
        this.grids[7] = this.grids[15];
        this.grids[11] = 0;
        this.grids[15] = 0;
      }
    } else if (
      this.grids[14] &&
      this.grids[10] &&
      !this.grids[6] &&
      this.grids[2]
    ) {
      if (this.grids[2] == this.grids[10]) {
        this.grids[2] += this.grids[10];
        this.grids[6] = this.grids[14];
        this.grids[10] = 0;
        this.grids[14] = 0;
      } else if (this.grids[14] == this.grids[10]) {
        this.grids[6] = this.grids[10] + this.grids[14];
        this.grids[10] = 0;
        this.grids[14] = 0;
      } else {
        this.grids[6] = this.grids[10];
        this.grids[10] = this.grids[14];
        this.grids[14] = 0;
      }
    }
    // =========================================== 1x1 is true =====================================Bottom
    // =========================================== 2x1 is true =====================================Head
    // if 2x1 is true
    else if (
      !this.grids[15] &&
      this.grids[11] &&
      !this.grids[7] &&
      !this.grids[3]
    ) {
      this.grids[3] = this.grids[11];
      this.grids[11] = 0;
    }
    // if 2x1 & 4x1 is true
    else if (
      !this.grids[15] &&
      this.grids[11] &&
      !this.grids[7] &&
      this.grids[3]
    ) {
      if (this.grids[11] == this.grids[3]) {
        this.grids[3] += this.grids[11];
        this.grids[11] = 0;
      } else {
        this.grids[7] = this.grids[11];
        this.grids[11] = 0;
      }
    }
    // if 2x1 & 3x1 & 4x1 is true
    else if (
      !this.grids[15] &&
      this.grids[11] &&
      this.grids[7] &&
      this.grids[3]
    ) {
      if (this.grids[3] == this.grids[7]) {
        this.grids[3] += this.grids[7];
        this.grids[7] = this.grids[11];
        this.grids[11] = 0;
      } else if (this.grids[11] == this.grids[7]) {
        this.grids[7] += this.grids[11];
        this.grids[11] = 0;
      }
    }
    //if 2x1 & 3x1 is true
    else if (
      !this.grids[15] &&
      this.grids[11] &&
      this.grids[7] &&
      !this.grids[3]
    ) {
      if (this.grids[11] == this.grids[7]) {
        this.grids[3] = this.grids[11] + this.grids[7];
        this.grids[11] = 0;
        this.grids[7] = 0;
      } else {
        this.grids[3] = this.grids[7];
        this.grids[7] = this.grids[11];
        this.grids[11] = 0;
      }
    }
    // =========================================== 2x1 is true =====================================Bottom
    // =========================================== 3x1 is true =====================================Head
    //if 3x1 is true
    else if (
      !this.grids[15] &&
      !this.grids[11] &&
      this.grids[7] &&
      !this.grids[3]
    ) {
      this.grids[3] = this.grids[7];
      this.grids[7] = 0;
    }
    // if 3x1 & 4x1 is true
    else if (
      !this.grids[15] &&
      !this.grids[11] &&
      this.grids[7] &&
      this.grids[3]
    ) {
      if (this.grids[3] == this.grids[7]) {
        this.grids[3] += this.grids[7];
        this.grids[7] = 0;
      }
    }
    // =========================================== 3x1 is true =====================================Bottom
  }

  @HostListener('document:keydown.arrowLeft', ['$event'])
  onKeyLeft(event: KeyboardEvent) {
    // =========================================== 1x1 is true =====================================Head
    //if only 1x1 is true
    if (this.grids[15] && !this.grids[14] && !this.grids[13] && !this.grids[12]) {
      this.grids[12] = this.grids[15];
      this.grids[15] = 0;
    }
    //if 1x1 and 4x1 is true
    else if (
      this.grids[15] &&
      !this.grids[14] &&
      !this.grids[13] &&
      this.grids[12]
    ) {
      if (this.grids[15] == this.grids[12]) {
        this.grids[12] += this.grids[15];
        this.grids[15] = 0;
      } else {
        this.grids[13] = this.grids[15];
        this.grids[15] = 0;
      }
    }
    //if 1x1 & 3x1 & 4x1 is true
    else if (
      this.grids[15] &&
      !this.grids[14] &&
      this.grids[13] &&
      this.grids[12]
    ) {
      if (this.grids[13] == this.grids[12]) {
        this.grids[12] += this.grids[13];
        this.grids[13] = this.grids[15];
        this.grids[15] = 0;
      } else if (this.grids[13] != this.grids[12]) {
        if (this.grids[15] == this.grids[13]) {
          this.grids[13] += this.grids[15];
          this.grids[15] = 0;
        } else {
          this.grids[14] = this.grids[15];
          this.grids[15] = 0;
        }
      }
    }

    //if 1x1 & 2x1 & 3x1 & 4x1 is true
    else if (
      this.grids[15] &&
      this.grids[14] &&
      this.grids[13] &&
      this.grids[12]
    ) {
      if (this.grids[15] == this.grids[14] && this.grids[13] == this.grids[12]) {
        this.grids[12] += this.grids[13];
        this.grids[13] = this.grids[14] + this.grids[15];
        this.grids[14] = 0;
        this.grids[15] = 0;
      } else if (
        this.grids[15] == this.grids[14] &&
        this.grids[13] != this.grids[12]
      ) {
        if (this.grids[14] != this.grids[13]) {
          this.grids[14] += this.grids[15];
          this.grids[15] = 0;
        } else {
          this.grids[13] += this.grids[14];
          this.grids[14] = this.grids[15];
          this.grids[15] = 0;
        }
      } else if (
        this.grids[15] != this.grids[14] &&
        this.grids[13] == this.grids[12]
      ) {
        this.grids[12] += this.grids[13];
        this.grids[13] = this.grids[14];
        this.grids[14] = this.grids[15];
        this.grids[15] = 0;
      } else if (
        this.grids[15] != this.grids[14] &&
        this.grids[13] != this.grids[12] &&
        this.grids[14] == this.grids[13]
      ) {
        this.grids[13] += this.grids[14];
        this.grids[14] = this.grids[15];
        this.grids[15] = 0;
      }
    }
    // if 1x1 & 3x1 is true
    else if (
      this.grids[15] &&
      !this.grids[14] &&
      this.grids[13] &&
      !this.grids[12]
    ) {
      if (this.grids[15] == this.grids[13]) {
        this.grids[12] = this.grids[15] + this.grids[13];
        this.grids[13] = 0;
        this.grids[15] = 0;
      } else {
        this.grids[12] = this.grids[13];
        this.grids[13] = this.grids[15];
        this.grids[15] = 0;
      }
    }

    // if 1x1 & 2x1 & 3x1 is true
    else if (
      this.grids[15] &&
      this.grids[14] &&
      this.grids[13] &&
      !this.grids[12]
    ) {
      if (this.grids[13] == this.grids[14]) {
        this.grids[12] = this.grids[13] + this.grids[14];
        this.grids[13] = this.grids[15];
        this.grids[14] = 0;
        this.grids[15] = 0;
      } else if (this.grids[14] == this.grids[15]) {
        this.grids[12] = this.grids[13];
        this.grids[13] = this.grids[14] + this.grids[15];
        this.grids[14] = 0;
        this.grids[15] = 0;
      } else {
        this.grids[12] = this.grids[13];
        this.grids[13] = this.grids[14];
        this.grids[14] = this.grids[15];
        this.grids[15] = 0;
      }
    }
    // if 1x1 & 2x1 is true
    else if (
      this.grids[15] &&
      this.grids[14] &&
      !this.grids[13] &&
      !this.grids[12]
    ) {
      if (this.grids[14] == this.grids[15]) {
        this.grids[12] = this.grids[14] + this.grids[15];
        this.grids[14] = 0;
        this.grids[15] = 0;
      } else {
        this.grids[12] = this.grids[14];
        this.grids[13] = this.grids[15];
        this.grids[14] = 0;
        this.grids[15] = 0;
      }
    }
    // if 1x1 & 2x1 & 4x1 is true
    else if (
      this.grids[15] &&
      this.grids[14] &&
      !this.grids[13] &&
      this.grids[12]
    ) {
      if (this.grids[12] == this.grids[14]) {
        this.grids[12] += this.grids[14];
        this.grids[13] = this.grids[15];
        this.grids[14] = 0;
        this.grids[15] = 0;
      } else if (this.grids[15] == this.grids[14]) {
        this.grids[13] = this.grids[14] + this.grids[15];
        this.grids[14] = 0;
        this.grids[15] = 0;
      } else {
        this.grids[13] = this.grids[14];
        this.grids[14] = this.grids[15];
        this.grids[15] = 0;
      }
    }

    // =========================================== 1x1 is true =====================================Bottom
    // =========================================== 2x1 is true =====================================Head
    // if 2x1 is true
    else if (
      !this.grids[15] &&
      this.grids[14] &&
      !this.grids[13] &&
      !this.grids[12]
    ) {
      this.grids[12] = this.grids[14];
      this.grids[14] = 0;
    }
    // if 2x1 & 4x1 is true
    else if (
      !this.grids[15] &&
      this.grids[14] &&
      !this.grids[13] &&
      this.grids[12]
    ) {
      if (this.grids[14] == this.grids[12]) {
        this.grids[12] += this.grids[14];
        this.grids[14] = 0;
      } else {
        this.grids[13] = this.grids[14];
        this.grids[14] = 0;
      }
    }
    // if 2x1 & 3x1 & 4x1 is true
    else if (
      !this.grids[15] &&
      this.grids[14] &&
      this.grids[13] &&
      this.grids[12]
    ) {
      if (this.grids[12] == this.grids[13]) {
        this.grids[12] += this.grids[13];
        this.grids[13] = this.grids[14];
        this.grids[14] = 0;
      } else if (this.grids[14] == this.grids[13]) {
        this.grids[13] += this.grids[14];
        this.grids[14] = 0;
      }
    }
    //if 2x1 & 3x1 is true
    else if (
      !this.grids[15] &&
      this.grids[14] &&
      this.grids[13] &&
      !this.grids[12]
    ) {
      if (this.grids[14] == this.grids[13]) {
        this.grids[12] = this.grids[14] + this.grids[13];
        this.grids[14] = 0;
        this.grids[13] = 0;
      } else {
        this.grids[12] = this.grids[13];
        this.grids[13] = this.grids[14];
        this.grids[14] = 0;
      }
    }
    // =========================================== 2x1 is true =====================================Bottom
    // =========================================== 3x1 is true =====================================Head
    //if 3x1 is true
    else if (
      !this.grids[15] &&
      !this.grids[14] &&
      this.grids[13] &&
      !this.grids[12]
    ) {
      this.grids[12] = this.grids[13];
      this.grids[13] = 0;
    }
    // if 3x1 & 4x1 is true
    else if (
      !this.grids[15] &&
      !this.grids[14] &&
      this.grids[13] &&
      this.grids[12]
    ) {
      if (this.grids[12] == this.grids[13]) {
        this.grids[12] += this.grids[13];
        this.grids[13] = 0;
      }
    }
    // =========================================== 3x1 is true =====================================Bottom
    // ======================
    // =============================================
    // ======================

    // =========================================== 1x1 is true =====================================Head
    //if only 1x1 is true
    if (this.grids[11] && !this.grids[10] && !this.grids[9] && !this.grids[8]) {
      this.grids[8] = this.grids[11];
      this.grids[11] = 0;
    }
    //if 1x1 and 5x1 is true
    else if (
      this.grids[11] &&
      !this.grids[10] &&
      !this.grids[9] &&
      this.grids[8]
    ) {
      if (this.grids[11] == this.grids[8]) {
        this.grids[8] += this.grids[11];
        this.grids[11] = 0;
      } else {
        this.grids[9] = this.grids[11];
        this.grids[11] = 0;
      }
    }
    //if 1x1 & 3x1 & 5x1 is true
    else if (
      this.grids[11] &&
      !this.grids[10] &&
      this.grids[9] &&
      this.grids[8]
    ) {
      if (this.grids[9] == this.grids[8]) {
        this.grids[8] += this.grids[9];
        this.grids[9] = this.grids[11];
        this.grids[11] = 0;
      } else if (this.grids[9] != this.grids[8]) {
        if (this.grids[11] == this.grids[9]) {
          this.grids[9] += this.grids[11];
          this.grids[11] = 0;
        } else {
          this.grids[10] = this.grids[11];
          this.grids[11] = 0;
        }
      }
    }

    //if 1x1 & 2x1 & 3x1 & 5x1 is true
    else if (
      this.grids[11] &&
      this.grids[10] &&
      this.grids[9] &&
      this.grids[8]
    ) {
      if (this.grids[11] == this.grids[10] && this.grids[9] == this.grids[8]) {
        this.grids[8] += this.grids[9];
        this.grids[9] = this.grids[10] + this.grids[11];
        this.grids[10] = 0;
        this.grids[11] = 0;
      } else if (
        this.grids[11] == this.grids[10] &&
        this.grids[9] != this.grids[8]
      ) {
        if (this.grids[10] != this.grids[9]) {
          this.grids[10] += this.grids[11];
          this.grids[11] = 0;
        } else {
          this.grids[9] += this.grids[10];
          this.grids[10] = this.grids[11];
          this.grids[11] = 0;
        }
      } else if (
        this.grids[11] != this.grids[10] &&
        this.grids[9] == this.grids[8]
      ) {
        this.grids[8] += this.grids[9];
        this.grids[9] = this.grids[10];
        this.grids[10] = this.grids[11];
        this.grids[11] = 0;
      } else if (
        this.grids[11] != this.grids[10] &&
        this.grids[9] != this.grids[8] &&
        this.grids[10] == this.grids[9]
      ) {
        this.grids[9] += this.grids[10];
        this.grids[10] = this.grids[11];
        this.grids[11] = 0;
      }
    }
    // if 1x1 & 3x1 is true
    else if (
      this.grids[11] &&
      !this.grids[10] &&
      this.grids[9] &&
      !this.grids[8]
    ) {
      if (this.grids[11] == this.grids[9]) {
        this.grids[8] = this.grids[11] + this.grids[9];
        this.grids[9] = 0;
        this.grids[11] = 0;
      } else {
        this.grids[8] = this.grids[9];
        this.grids[9] = this.grids[11];
        this.grids[11] = 0;
      }
    }

    // if 1x1 & 2x1 & 3x1 is true
    else if (
      this.grids[11] &&
      this.grids[10] &&
      this.grids[9] &&
      !this.grids[8]
    ) {
      if (this.grids[9] == this.grids[10]) {
        this.grids[8] = this.grids[9] + this.grids[10];
        this.grids[9] = this.grids[11];
        this.grids[10] = 0;
        this.grids[11] = 0;
      } else if (this.grids[10] == this.grids[11]) {
        this.grids[8] = this.grids[9];
        this.grids[9] = this.grids[10] + this.grids[11];
        this.grids[10] = 0;
        this.grids[11] = 0;
      } else {
        this.grids[8] = this.grids[9];
        this.grids[9] = this.grids[10];
        this.grids[10] = this.grids[11];
        this.grids[11] = 0;
      }
    } else if (
      this.grids[11] &&
      this.grids[10] &&
      !this.grids[9] &&
      !this.grids[8]
    ) {
      if (this.grids[10] == this.grids[11]) {
        this.grids[8] = this.grids[10] + this.grids[11];
        this.grids[10] = 0;
        this.grids[11] = 0;
      } else {
        this.grids[8] = this.grids[10];
        this.grids[9] = this.grids[11];
        this.grids[10] = 0;
        this.grids[11] = 0;
      }
    } else if (
      this.grids[11] &&
      this.grids[10] &&
      !this.grids[9] &&
      this.grids[8]
    ) {
      if (this.grids[8] == this.grids[10]) {
        this.grids[8] += this.grids[10];
        this.grids[9] = this.grids[11];
        this.grids[10] = 0;
        this.grids[11] = 0;
      } else if (this.grids[11] == this.grids[10]) {
        this.grids[9] = this.grids[10] + this.grids[11];
        this.grids[10] = 0;
        this.grids[11] = 0;
      } else {
        this.grids[9] = this.grids[10];
        this.grids[10] = this.grids[11];
        this.grids[11] = 0;
      }
    }

    // =========================================== 1x1 is true =====================================Bottom
    // =========================================== 2x1 is true =====================================Head
    // if 2x1 is true
    else if (
      !this.grids[11] &&
      this.grids[10] &&
      !this.grids[9] &&
      !this.grids[8]
    ) {
      this.grids[8] = this.grids[10];
      this.grids[10] = 0;
    }
    // if 2x1 & 5x1 is true
    else if (
      !this.grids[11] &&
      this.grids[10] &&
      !this.grids[9] &&
      this.grids[8]
    ) {
      if (this.grids[10] == this.grids[8]) {
        this.grids[8] += this.grids[10];
        this.grids[10] = 0;
      } else {
        this.grids[9] = this.grids[10];
        this.grids[10] = 0;
      }
    }
    // if 2x1 & 3x1 & 5x1 is true
    else if (
      !this.grids[11] &&
      this.grids[10] &&
      this.grids[9] &&
      this.grids[8]
    ) {
      if (this.grids[8] == this.grids[9]) {
        this.grids[8] += this.grids[9];
        this.grids[9] = this.grids[10];
        this.grids[10] = 0;
      } else if (this.grids[10] == this.grids[9]) {
        this.grids[9] += this.grids[10];
        this.grids[10] = 0;
      }
    }
    //if 2x1 & 3x1 is true
    else if (
      !this.grids[11] &&
      this.grids[10] &&
      this.grids[9] &&
      !this.grids[8]
    ) {
      if (this.grids[10] == this.grids[9]) {
        this.grids[8] = this.grids[10] + this.grids[9];
        this.grids[10] = 0;
        this.grids[9] = 0;
      } else {
        this.grids[8] = this.grids[9];
        this.grids[9] = this.grids[10];
        this.grids[10] = 0;
      }
    }
    // =========================================== 2x1 is true =====================================Bottom
    // =========================================== 3x1 is true =====================================Head
    //if 3x1 is true
    else if (
      !this.grids[11] &&
      !this.grids[10] &&
      this.grids[9] &&
      !this.grids[8]
    ) {
      this.grids[8] = this.grids[9];
      this.grids[9] = 0;
    }
    // if 3x1 & 5x1 is true
    else if (
      !this.grids[11] &&
      !this.grids[10] &&
      this.grids[9] &&
      this.grids[8]
    ) {
      if (this.grids[8] == this.grids[9]) {
        this.grids[8] += this.grids[9];
        this.grids[9] = 0;
      }
    }
    // =========================================== 3x1 is true =====================================Bottom
    // ======================
    // =============================================
    // ======================

    // =========================================== 1x1 is true =====================================Head
    //if only 1x1 is true
    if (this.grids[7] && !this.grids[6] && !this.grids[5] && !this.grids[4]) {
      this.grids[4] = this.grids[7];
      this.grids[7] = 0;
    }
    //if 1x1 and 4x1 is true
    else if (
      this.grids[7] &&
      !this.grids[6] &&
      !this.grids[5] &&
      this.grids[4]
    ) {
      if (this.grids[7] == this.grids[4]) {
        this.grids[4] += this.grids[7];
        this.grids[7] = 0;
      } else {
        this.grids[5] = this.grids[7];
        this.grids[7] = 0;
      }
    }
    //if 1x1 & 3x1 & 4x1 is true
    else if (
      this.grids[7] &&
      !this.grids[6] &&
      this.grids[5] &&
      this.grids[4]
    ) {
      if (this.grids[5] == this.grids[4]) {
        this.grids[4] += this.grids[5];
        this.grids[5] = this.grids[7];
        this.grids[7] = 0;
      } else if (this.grids[5] != this.grids[4]) {
        if (this.grids[7] == this.grids[5]) {
          this.grids[5] += this.grids[7];
          this.grids[7] = 0;
        } else {
          this.grids[6] = this.grids[7];
          this.grids[7] = 0;
        }
      }
    }

    //if 1x1 & 2x1 & 3x1 & 4x1 is true
    else if (
      this.grids[7] &&
      this.grids[6] &&
      this.grids[5] &&
      this.grids[4]
    ) {
      if (this.grids[7] == this.grids[6] && this.grids[5] == this.grids[4]) {
        this.grids[4] += this.grids[5];
        this.grids[5] = this.grids[6] + this.grids[7];
        this.grids[6] = 0;
        this.grids[7] = 0;
      } else if (
        this.grids[7] == this.grids[6] &&
        this.grids[5] != this.grids[4]
      ) {
        if (this.grids[6] != this.grids[5]) {
          this.grids[6] += this.grids[7];
          this.grids[7] = 0;
        } else {
          this.grids[5] += this.grids[6];
          this.grids[6] = this.grids[7];
          this.grids[7] = 0;
        }
      } else if (
        this.grids[7] != this.grids[6] &&
        this.grids[5] == this.grids[4]
      ) {
        this.grids[4] += this.grids[5];
        this.grids[5] = this.grids[6];
        this.grids[6] = this.grids[7];
        this.grids[7] = 0;
      } else if (
        this.grids[7] != this.grids[6] &&
        this.grids[5] != this.grids[4] &&
        this.grids[6] == this.grids[5]
      ) {
        this.grids[5] += this.grids[6];
        this.grids[6] = this.grids[7];
        this.grids[7] = 0;
      }
    }
    // if 1x1 & 3x1 is true
    else if (
      this.grids[7] &&
      !this.grids[6] &&
      this.grids[5] &&
      !this.grids[4]
    ) {
      if (this.grids[7] == this.grids[5]) {
        this.grids[4] = this.grids[7] + this.grids[5];
        this.grids[5] = 0;
        this.grids[7] = 0;
      } else {
        this.grids[4] = this.grids[5];
        this.grids[5] = this.grids[7];
        this.grids[7] = 0;
      }
    }

    // if 1x1 & 2x1 & 3x1 is true
    else if (
      this.grids[7] &&
      this.grids[6] &&
      this.grids[5] &&
      !this.grids[4]
    ) {
      if (this.grids[5] == this.grids[6]) {
        this.grids[4] = this.grids[5] + this.grids[6];
        this.grids[5] = this.grids[7];
        this.grids[6] = 0;
        this.grids[7] = 0;
      } else if (this.grids[6] == this.grids[7]) {
        this.grids[4] = this.grids[5];
        this.grids[5] = this.grids[6] + this.grids[7];
        this.grids[6] = 0;
        this.grids[7] = 0;
      } else {
        this.grids[4] = this.grids[5];
        this.grids[5] = this.grids[6];
        this.grids[6] = this.grids[7];
        this.grids[7] = 0;
      }
    } else if (
      this.grids[7] &&
      this.grids[6] &&
      !this.grids[5] &&
      !this.grids[4]
    ) {
      if (this.grids[6] == this.grids[7]) {
        this.grids[4] = this.grids[6] + this.grids[7];
        this.grids[6] = 0;
        this.grids[7] = 0;
      } else {
        this.grids[4] = this.grids[6];
        this.grids[5] = this.grids[7];
        this.grids[6] = 0;
        this.grids[7] = 0;
      }
    } else if (
      this.grids[7] &&
      this.grids[6] &&
      !this.grids[5] &&
      this.grids[4]
    ) {
      if (this.grids[4] == this.grids[6]) {
        this.grids[4] += this.grids[6];
        this.grids[5] = this.grids[7];
        this.grids[6] = 0;
        this.grids[7] = 0;
      } else if (this.grids[7] == this.grids[6]) {
        this.grids[5] = this.grids[6] + this.grids[7];
        this.grids[6] = 0;
        this.grids[7] = 0;
      } else {
        this.grids[5] = this.grids[6];
        this.grids[6] = this.grids[7];
        this.grids[7] = 0;
      }
    }

    // =========================================== 1x1 is true =====================================Bottom
    // =========================================== 2x1 is true =====================================Head
    // if 2x1 is true
    else if (
      !this.grids[7] &&
      this.grids[6] &&
      !this.grids[5] &&
      !this.grids[4]
    ) {
      this.grids[4] = this.grids[6];
      this.grids[6] = 0;
    }
    // if 2x1 & 4x1 is true
    else if (
      !this.grids[7] &&
      this.grids[6] &&
      !this.grids[5] &&
      this.grids[4]
    ) {
      if (this.grids[6] == this.grids[4]) {
        this.grids[4] += this.grids[6];
        this.grids[6] = 0;
      } else {
        this.grids[5] = this.grids[6];
        this.grids[6] = 0;
      }
    }
    // if 2x1 & 3x1 & 4x1 is true
    else if (
      !this.grids[7] &&
      this.grids[6] &&
      this.grids[5] &&
      this.grids[4]
    ) {
      if (this.grids[4] == this.grids[5]) {
        this.grids[4] += this.grids[5];
        this.grids[5] = this.grids[6];
        this.grids[6] = 0;
      } else if (this.grids[6] == this.grids[5]) {
        this.grids[5] += this.grids[6];
        this.grids[6] = 0;
      }
    }
    //if 2x1 & 3x1 is true
    else if (
      !this.grids[7] &&
      this.grids[6] &&
      this.grids[5] &&
      !this.grids[4]
    ) {
      if (this.grids[6] == this.grids[5]) {
        this.grids[4] = this.grids[6] + this.grids[5];
        this.grids[6] = 0;
        this.grids[5] = 0;
      } else {
        this.grids[4] = this.grids[5];
        this.grids[5] = this.grids[6];
        this.grids[6] = 0;
      }
    }
    // =========================================== 2x1 is true =====================================Bottom
    // =========================================== 3x1 is true =====================================Head
    //if 3x1 is true
    else if (
      !this.grids[7] &&
      !this.grids[6] &&
      this.grids[5] &&
      !this.grids[4]
    ) {
      this.grids[4] = this.grids[5];
      this.grids[5] = 0;
    }
    // if 3x1 & 4x1 is true
    else if (
      !this.grids[7] &&
      !this.grids[6] &&
      this.grids[5] &&
      this.grids[4]
    ) {
      if (this.grids[4] == this.grids[5]) {
        this.grids[4] += this.grids[5];
        this.grids[5] = 0;
      }
    }
    // =========================================== 3x1 is true =====================================Bottom
    // ======================
    // =============================================
    // ======================
    // =========================================== 1x1 is true =====================================Head
    //if only 1x1 is true
    if (this.grids[3] && !this.grids[2] && !this.grids[1] && !this.grids[0]) {
      this.grids[0] = this.grids[3];
      this.grids[3] = 0;
    }
    //if 1x1 and 4x1 is true
    else if (
      this.grids[3] &&
      !this.grids[2] &&
      !this.grids[1] &&
      this.grids[0]
    ) {
      if (this.grids[3] == this.grids[0]) {
        this.grids[0] += this.grids[3];
        this.grids[3] = 0;
      } else {
        this.grids[1] = this.grids[3];
        this.grids[3] = 0;
      }
    }
    //if 1x1 & 3x1 & 4x1 is true
    else if (
      this.grids[3] &&
      !this.grids[2] &&
      this.grids[1] &&
      this.grids[0]
    ) {
      if (this.grids[1] == this.grids[0]) {
        this.grids[0] += this.grids[1];
        this.grids[1] = this.grids[3];
        this.grids[3] = 0;
      } else if (this.grids[1] != this.grids[0]) {
        if (this.grids[3] == this.grids[1]) {
          this.grids[1] += this.grids[3];
          this.grids[3] = 0;
        } else {
          this.grids[2] = this.grids[3];
          this.grids[3] = 0;
        }
      }
    } else if (
      this.grids[3] &&
      this.grids[2] &&
      !this.grids[1] &&
      this.grids[0]
    ) {
      if (this.grids[0] == this.grids[2]) {
        this.grids[0] += this.grids[2];
        this.grids[1] = this.grids[3];
        this.grids[2] = 0;
        this.grids[3] = 0;
      } else if (this.grids[3] == this.grids[2]) {
        this.grids[1] = this.grids[2] + this.grids[3];
        this.grids[2] = 0;
        this.grids[3] = 0;
      } else {
        this.grids[1] = this.grids[2];
        this.grids[2] = this.grids[3];
        this.grids[3] = 0;
      }
    }

    //if 1x1 & 2x1 & 3x1 & 4x1 is true
    else if (
      this.grids[3] &&
      this.grids[2] &&
      this.grids[1] &&
      this.grids[0]
    ) {
      if (this.grids[3] == this.grids[2] && this.grids[1] == this.grids[0]) {
        this.grids[0] += this.grids[1];
        this.grids[1] = this.grids[2] + this.grids[3];
        this.grids[2] = 0;
        this.grids[3] = 0;
      } else if (
        this.grids[3] == this.grids[2] &&
        this.grids[1] != this.grids[0]
      ) {
        if (this.grids[2] != this.grids[1]) {
          this.grids[2] += this.grids[3];
          this.grids[3] = 0;
        } else {
          this.grids[1] += this.grids[2];
          this.grids[2] = this.grids[3];
          this.grids[3] = 0;
        }
      } else if (
        this.grids[3] != this.grids[2] &&
        this.grids[1] == this.grids[0]
      ) {
        this.grids[0] += this.grids[1];
        this.grids[1] = this.grids[2];
        this.grids[2] = this.grids[3];
        this.grids[3] = 0;
      } else if (
        this.grids[3] != this.grids[2] &&
        this.grids[1] != this.grids[0] &&
        this.grids[2] == this.grids[1]
      ) {
        this.grids[1] += this.grids[2];
        this.grids[2] = this.grids[3];
        this.grids[3] = 0;
      }
    }
    // if 1x1 & 3x1 is true
    else if (
      this.grids[3] &&
      !this.grids[2] &&
      this.grids[1] &&
      !this.grids[0]
    ) {
      if (this.grids[3] == this.grids[1]) {
        this.grids[0] = this.grids[3] + this.grids[1];
        this.grids[1] = 0;
        this.grids[3] = 0;
      } else {
        this.grids[0] = this.grids[1];
        this.grids[1] = this.grids[3];
        this.grids[3] = 0;
      }
    }

    // if 1x1 & 2x1 & 3x1 is true
    else if (
      this.grids[3] &&
      this.grids[2] &&
      this.grids[1] &&
      !this.grids[0]
    ) {
      if (this.grids[1] == this.grids[2]) {
        this.grids[0] = this.grids[1] + this.grids[2];
        this.grids[1] = this.grids[3];
        this.grids[2] = 0;
        this.grids[3] = 0;
      } else if (this.grids[2] == this.grids[3]) {
        this.grids[0] = this.grids[1];
        this.grids[1] = this.grids[2] + this.grids[3];
        this.grids[2] = 0;
        this.grids[3] = 0;
      } else {
        this.grids[0] = this.grids[1];
        this.grids[1] = this.grids[2];
        this.grids[2] = this.grids[3];
        this.grids[3] = 0;
      }
    } else if (
      this.grids[3] &&
      this.grids[2] &&
      !this.grids[1] &&
      !this.grids[0]
    ) {
      if (this.grids[2] == this.grids[3]) {
        this.grids[0] = this.grids[2] + this.grids[3];
        this.grids[2] = 0;
        this.grids[3] = 0;
      } else {
        this.grids[0] = this.grids[2];
        this.grids[1] = this.grids[3];
        this.grids[2] = 0;
        this.grids[3] = 0;
      }
    } else if (
      this.grids[7] &&
      this.grids[6] &&
      !this.grids[5] &&
      this.grids[4]
    ) {
      if (this.grids[4] == this.grids[6]) {
        this.grids[4] += this.grids[6];
        this.grids[5] = this.grids[7];
        this.grids[6] = 0;
        this.grids[7] = 0;
      } else if (this.grids[7] == this.grids[6]) {
        this.grids[5] = this.grids[6] + this.grids[7];
        this.grids[6] = 0;
        this.grids[7] = 0;
      } else {
        this.grids[5] = this.grids[6];
        this.grids[6] = this.grids[7];
        this.grids[7] = 0;
      }
    }
    // =========================================== 1x1 is true =====================================Bottom
    // =========================================== 2x1 is true =====================================Head
    // if 2x1 is true
    else if (
      !this.grids[3] &&
      this.grids[2] &&
      !this.grids[1] &&
      !this.grids[0]
    ) {
      this.grids[0] = this.grids[2];
      this.grids[2] = 0;
    }
    // if 2x1 & 4x1 is true
    else if (
      !this.grids[3] &&
      this.grids[2] &&
      !this.grids[1] &&
      this.grids[0]
    ) {
      if (this.grids[2] == this.grids[0]) {
        this.grids[0] += this.grids[2];
        this.grids[2] = 0;
      } else {
        this.grids[1] = this.grids[2];
        this.grids[2] = 0;
      }
    }
    // if 2x1 & 3x1 & 4x1 is true
    else if (
      !this.grids[3] &&
      this.grids[2] &&
      this.grids[1] &&
      this.grids[0]
    ) {
      if (this.grids[0] == this.grids[1]) {
        this.grids[0] += this.grids[1];
        this.grids[1] = this.grids[2];
        this.grids[2] = 0;
      } else if (this.grids[2] == this.grids[1]) {
        this.grids[1] += this.grids[2];
        this.grids[2] = 0;
      }
    }
    //if 2x1 & 3x1 is true
    else if (
      !this.grids[3] &&
      this.grids[2] &&
      this.grids[1] &&
      !this.grids[0]
    ) {
      if (this.grids[2] == this.grids[1]) {
        this.grids[0] = this.grids[2] + this.grids[1];
        this.grids[2] = 0;
        this.grids[1] = 0;
      } else {
        this.grids[0] = this.grids[1];
        this.grids[1] = this.grids[2];
        this.grids[2] = 0;
      }
    }
    // =========================================== 2x1 is true =====================================Bottom
    // =========================================== 3x1 is true =====================================Head
    //if 3x1 is true
    else if (
      !this.grids[3] &&
      !this.grids[2] &&
      this.grids[1] &&
      !this.grids[0]
    ) {
      this.grids[0] = this.grids[1];
      this.grids[1] = 0;
    }
    // if 3x1 & 4x1 is true
    else if (
      !this.grids[3] &&
      !this.grids[2] &&
      this.grids[1] &&
      this.grids[0]
    ) {
      if (this.grids[0] == this.grids[1]) {
        this.grids[0] += this.grids[1];
        this.grids[1] = 0;
      }
    }
    // =========================================== 3x1 is true =====================================Bottom
  }

  @HostListener('document:keydown.arrowRight', ['$event'])
  onKeyRight(event: KeyboardEvent) {
    // =========================================== 1x1 is true =====================================Head
    //if only 1x1 is true
    if (this.grids[12] && !this.grids[13] && !this.grids[14] && !this.grids[15]) {
      this.grids[15] = this.grids[12];
      this.grids[12] = 0;
    }
    //if 1x1 and 4x1 is true
    else if (
      this.grids[12] &&
      !this.grids[13] &&
      !this.grids[14] &&
      this.grids[15]
    ) {
      if (this.grids[12] == this.grids[15]) {
        this.grids[15] += this.grids[12];
        this.grids[12] = 0;
      } else {
        this.grids[14] = this.grids[12];
        this.grids[12] = 0;
      }
    }
    //if 1x1 & 3x1 & 4x1 is true
    else if (
      this.grids[12] &&
      !this.grids[13] &&
      this.grids[14] &&
      this.grids[15]
    ) {
      if (this.grids[14] == this.grids[15]) {
        this.grids[15] += this.grids[14];
        this.grids[14] = this.grids[12];
        this.grids[12] = 0;
      } else if (this.grids[14] != this.grids[15]) {
        if (this.grids[12] == this.grids[14]) {
          this.grids[14] += this.grids[12];
          this.grids[12] = 0;
        } else {
          this.grids[13] = this.grids[12];
          this.grids[12] = 0;
        }
      }
    }

    //if 1x1 & 2x1 & 3x1 & 4x1 is true
    else if (
      this.grids[12] &&
      this.grids[13] &&
      this.grids[14] &&
      this.grids[15]
    ) {
      if (this.grids[12] == this.grids[13] && this.grids[14] == this.grids[15]) {
        this.grids[15] += this.grids[14];
        this.grids[14] = this.grids[13] + this.grids[12];
        this.grids[13] = 0;
        this.grids[12] = 0;
      } else if (
        this.grids[12] == this.grids[13] &&
        this.grids[14] != this.grids[15]
      ) {
        if (this.grids[13] != this.grids[14]) {
          this.grids[13] += this.grids[12];
          this.grids[12] = 0;
        } else {
          this.grids[14] += this.grids[13];
          this.grids[13] = this.grids[12];
          this.grids[12] = 0;
        }
      } else if (
        this.grids[12] != this.grids[13] &&
        this.grids[14] == this.grids[15]
      ) {
        this.grids[15] += this.grids[14];
        this.grids[14] = this.grids[13];
        this.grids[13] = this.grids[12];
        this.grids[12] = 0;
      } else if (
        this.grids[12] != this.grids[13] &&
        this.grids[14] != this.grids[15] &&
        this.grids[13] == this.grids[14]
      ) {
        this.grids[14] += this.grids[13];
        this.grids[13] = this.grids[12];
        this.grids[12] = 0;
      }
    }
    // if 1x1 & 3x1 is true
    else if (
      this.grids[12] &&
      !this.grids[13] &&
      this.grids[14] &&
      !this.grids[15]
    ) {
      if (this.grids[12] == this.grids[14]) {
        this.grids[15] = this.grids[12] + this.grids[14];
        this.grids[14] = 0;
        this.grids[12] = 0;
      } else {
        this.grids[15] = this.grids[14];
        this.grids[14] = this.grids[12];
        this.grids[12] = 0;
      }
    }

    // if 1x1 & 2x1 & 3x1 is true
    else if (
      this.grids[12] &&
      this.grids[13] &&
      this.grids[14] &&
      !this.grids[15]
    ) {
      if (this.grids[14] == this.grids[13]) {
        this.grids[15] = this.grids[14] + this.grids[13];
        this.grids[14] = this.grids[12];
        this.grids[13] = 0;
        this.grids[12] = 0;
      } else if (this.grids[13] == this.grids[12]) {
        this.grids[15] = this.grids[14];
        this.grids[14] = this.grids[13] + this.grids[12];
        this.grids[13] = 0;
        this.grids[12] = 0;
      } else {
        this.grids[15] = this.grids[14];
        this.grids[14] = this.grids[13];
        this.grids[13] = this.grids[12];
        this.grids[12] = 0;
      }
    }
    // if 1x1 & 2x1 is true
    else if (
      this.grids[12] &&
      this.grids[13] &&
      !this.grids[14] &&
      !this.grids[15]
    ) {
      if (this.grids[13] == this.grids[12]) {
        this.grids[15] = this.grids[13] + this.grids[12];
        this.grids[13] = 0;
        this.grids[12] = 0;
      } else {
        this.grids[15] = this.grids[13];
        this.grids[14] = this.grids[12];
        this.grids[13] = 0;
        this.grids[12] = 0;
      }
    }
    // if 1x1 & 2x1 & 4x1 is true
    else if (
      this.grids[12] &&
      this.grids[13] &&
      !this.grids[14] &&
      this.grids[15]
    ) {
      if (this.grids[15] == this.grids[13]) {
        this.grids[15] += this.grids[13];
        this.grids[14] = this.grids[12];
        this.grids[13] = 0;
        this.grids[12] = 0;
      } else if (this.grids[12] == this.grids[13]) {
        this.grids[14] = this.grids[13] + this.grids[12];
        this.grids[13] = 0;
        this.grids[12] = 0;
      } else {
        this.grids[14] = this.grids[13];
        this.grids[13] = this.grids[12];
        this.grids[12] = 0;
      }
    }

    // =========================================== 1x1 is true =====================================Bottom
    // =========================================== 2x1 is true =====================================Head
    // if 2x1 is true
    else if (
      !this.grids[12] &&
      this.grids[13] &&
      !this.grids[14] &&
      !this.grids[15]
    ) {
      this.grids[15] = this.grids[13];
      this.grids[13] = 0;
    }
    // if 2x1 & 4x1 is true
    else if (
      !this.grids[12] &&
      this.grids[13] &&
      !this.grids[14] &&
      this.grids[15]
    ) {
      if (this.grids[13] == this.grids[15]) {
        this.grids[15] += this.grids[13];
        this.grids[13] = 0;
      } else {
        this.grids[14] = this.grids[13];
        this.grids[13] = 0;
      }
    }
    // if 2x1 & 3x1 & 4x1 is true
    else if (
      !this.grids[12] &&
      this.grids[13] &&
      this.grids[14] &&
      this.grids[15]
    ) {
      if (this.grids[15] == this.grids[14]) {
        this.grids[15] += this.grids[14];
        this.grids[14] = this.grids[13];
        this.grids[13] = 0;
      } else if (this.grids[13] == this.grids[14]) {
        this.grids[14] += this.grids[13];
        this.grids[13] = 0;
      }
    }
    //if 2x1 & 3x1 is true
    else if (
      !this.grids[12] &&
      this.grids[13] &&
      this.grids[14] &&
      !this.grids[15]
    ) {
      if (this.grids[13] == this.grids[14]) {
        this.grids[15] = this.grids[13] + this.grids[14];
        this.grids[13] = 0;
        this.grids[14] = 0;
      } else {
        this.grids[15] = this.grids[14];
        this.grids[14] = this.grids[13];
        this.grids[13] = 0;
      }
    }
    // =========================================== 2x1 is true =====================================Bottom
    // =========================================== 3x1 is true =====================================Head
    //if 3x1 is true
    else if (
      !this.grids[12] &&
      !this.grids[13] &&
      this.grids[14] &&
      !this.grids[15]
    ) {
      this.grids[15] = this.grids[14];
      this.grids[14] = 0;
    }
    // if 3x1 & 4x1 is true
    else if (
      !this.grids[12] &&
      !this.grids[13] &&
      this.grids[14] &&
      this.grids[15]
    ) {
      if (this.grids[15] == this.grids[14]) {
        this.grids[15] += this.grids[14];
        this.grids[14] = 0;
      }
    }
    // =========================================== 3x1 is true =====================================Bottom
    // ======================
    // =============================================
    // ======================

    // =========================================== 1x1 is true =====================================Head
    //if only 1x1 is true
    if (this.grids[8] && !this.grids[9] && !this.grids[10] && !this.grids[11]) {
      this.grids[11] = this.grids[8];
      this.grids[8] = 0;
    }
    //if 1x1 and 5x1 is true
    else if (
      this.grids[8] &&
      !this.grids[9] &&
      !this.grids[10] &&
      this.grids[11]
    ) {
      if (this.grids[8] == this.grids[11]) {
        this.grids[11] += this.grids[8];
        this.grids[8] = 0;
      } else {
        this.grids[10] = this.grids[8];
        this.grids[8] = 0;
      }
    }
    //if 1x1 & 3x1 & 5x1 is true
    else if (
      this.grids[8] &&
      !this.grids[9] &&
      this.grids[10] &&
      this.grids[11]
    ) {
      if (this.grids[10] == this.grids[11]) {
        this.grids[11] += this.grids[10];
        this.grids[10] = this.grids[8];
        this.grids[8] = 0;
      } else if (this.grids[10] != this.grids[11]) {
        if (this.grids[8] == this.grids[10]) {
          this.grids[10] += this.grids[8];
          this.grids[8] = 0;
        } else {
          this.grids[9] = this.grids[8];
          this.grids[8] = 0;
        }
      }
    }

    //if 1x1 & 2x1 & 3x1 & 5x1 is true
    else if (
      this.grids[8] &&
      this.grids[9] &&
      this.grids[10] &&
      this.grids[11]
    ) {
      if (this.grids[8] == this.grids[9] && this.grids[10] == this.grids[11]) {
        this.grids[11] += this.grids[10];
        this.grids[10] = this.grids[9] + this.grids[8];
        this.grids[9] = 0;
        this.grids[8] = 0;
      } else if (
        this.grids[8] == this.grids[9] &&
        this.grids[10] != this.grids[11]
      ) {
        if (this.grids[9] != this.grids[10]) {
          this.grids[9] += this.grids[8];
          this.grids[8] = 0;
        } else {
          this.grids[10] += this.grids[9];
          this.grids[9] = this.grids[8];
          this.grids[8] = 0;
        }
      } else if (
        this.grids[8] != this.grids[9] &&
        this.grids[10] == this.grids[11]
      ) {
        this.grids[11] += this.grids[10];
        this.grids[10] = this.grids[9];
        this.grids[9] = this.grids[8];
        this.grids[8] = 0;
      } else if (
        this.grids[8] != this.grids[9] &&
        this.grids[10] != this.grids[11] &&
        this.grids[9] == this.grids[10]
      ) {
        this.grids[10] += this.grids[9];
        this.grids[9] = this.grids[8];
        this.grids[8] = 0;
      }
    }
    // if 1x1 & 3x1 is true
    else if (
      this.grids[8] &&
      !this.grids[9] &&
      this.grids[10] &&
      !this.grids[11]
    ) {
      if (this.grids[8] == this.grids[10]) {
        this.grids[11] = this.grids[8] + this.grids[10];
        this.grids[10] = 0;
        this.grids[8] = 0;
      } else {
        this.grids[11] = this.grids[10];
        this.grids[10] = this.grids[8];
        this.grids[8] = 0;
      }
    }

    // if 1x1 & 2x1 & 3x1 is true
    else if (
      this.grids[8] &&
      this.grids[9] &&
      this.grids[10] &&
      !this.grids[11]
    ) {
      if (this.grids[10] == this.grids[9]) {
        this.grids[11] = this.grids[10] + this.grids[9];
        this.grids[10] = this.grids[8];
        this.grids[9] = 0;
        this.grids[8] = 0;
      } else if (this.grids[9] == this.grids[8]) {
        this.grids[11] = this.grids[10];
        this.grids[10] = this.grids[9] + this.grids[8];
        this.grids[9] = 0;
        this.grids[8] = 0;
      } else {
        this.grids[11] = this.grids[10];
        this.grids[10] = this.grids[9];
        this.grids[9] = this.grids[8];
        this.grids[8] = 0;
      }
    } else if (
      this.grids[8] &&
      this.grids[9] &&
      !this.grids[10] &&
      !this.grids[11]
    ) {
      if (this.grids[9] == this.grids[8]) {
        this.grids[11] = this.grids[9] + this.grids[8];
        this.grids[9] = 0;
        this.grids[8] = 0;
      } else {
        this.grids[11] = this.grids[9];
        this.grids[10] = this.grids[8];
        this.grids[9] = 0;
        this.grids[8] = 0;
      }
    } else if (
      this.grids[8] &&
      this.grids[9] &&
      !this.grids[10] &&
      this.grids[11]
    ) {
      if (this.grids[11] == this.grids[9]) {
        this.grids[11] += this.grids[9];
        this.grids[10] = this.grids[8];
        this.grids[9] = 0;
        this.grids[8] = 0;
      } else if (this.grids[8] == this.grids[9]) {
        this.grids[10] = this.grids[9] + this.grids[8];
        this.grids[9] = 0;
        this.grids[8] = 0;
      } else {
        this.grids[10] = this.grids[9];
        this.grids[9] = this.grids[8];
        this.grids[8] = 0;
      }
    }

    // =========================================== 1x1 is true =====================================Bottom
    // =========================================== 2x1 is true =====================================Head
    // if 2x1 is true
    else if (
      !this.grids[8] &&
      this.grids[9] &&
      !this.grids[10] &&
      !this.grids[11]
    ) {
      this.grids[11] = this.grids[9];
      this.grids[9] = 0;
    }
    // if 2x1 & 5x1 is true
    else if (
      !this.grids[8] &&
      this.grids[9] &&
      !this.grids[10] &&
      this.grids[11]
    ) {
      if (this.grids[9] == this.grids[11]) {
        this.grids[11] += this.grids[9];
        this.grids[9] = 0;
      } else {
        this.grids[10] = this.grids[9];
        this.grids[9] = 0;
      }
    }
    // if 2x1 & 3x1 & 5x1 is true
    else if (
      !this.grids[8] &&
      this.grids[9] &&
      this.grids[10] &&
      this.grids[11]
    ) {
      if (this.grids[11] == this.grids[10]) {
        this.grids[11] += this.grids[10];
        this.grids[10] = this.grids[9];
        this.grids[9] = 0;
      } else if (this.grids[9] == this.grids[10]) {
        this.grids[10] += this.grids[9];
        this.grids[9] = 0;
      }
    }
    //if 2x1 & 3x1 is true
    else if (
      !this.grids[8] &&
      this.grids[9] &&
      this.grids[10] &&
      !this.grids[11]
    ) {
      if (this.grids[9] == this.grids[10]) {
        this.grids[11] = this.grids[9] + this.grids[10];
        this.grids[9] = 0;
        this.grids[10] = 0;
      } else {
        this.grids[11] = this.grids[10];
        this.grids[10] = this.grids[9];
        this.grids[9] = 0;
      }
    }
    // =========================================== 2x1 is true =====================================Bottom
    // =========================================== 3x1 is true =====================================Head
    //if 3x1 is true
    else if (
      !this.grids[8] &&
      !this.grids[9] &&
      this.grids[10] &&
      !this.grids[11]
    ) {
      this.grids[11] = this.grids[10];
      this.grids[10] = 0;
    }
    // if 3x1 & 5x1 is true
    else if (
      !this.grids[8] &&
      !this.grids[9] &&
      this.grids[10] &&
      this.grids[11]
    ) {
      if (this.grids[11] == this.grids[10]) {
        this.grids[11] += this.grids[10];
        this.grids[10] = 0;
      }
    }
    // =========================================== 3x1 is true =====================================Bottom
    // ======================
    // =============================================
    // ======================

    // =========================================== 1x1 is true =====================================Head
    //if only 1x1 is true
    if (this.grids[4] && !this.grids[5] && !this.grids[6] && !this.grids[7]) {
      this.grids[7] = this.grids[4];
      this.grids[4] = 0;
    }
    //if 1x1 and 4x1 is true
    else if (
      this.grids[4] &&
      !this.grids[5] &&
      !this.grids[6] &&
      this.grids[7]
    ) {
      if (this.grids[4] == this.grids[7]) {
        this.grids[7] += this.grids[4];
        this.grids[4] = 0;
      } else {
        this.grids[6] = this.grids[4];
        this.grids[4] = 0;
      }
    }
    //if 1x1 & 3x1 & 4x1 is true
    else if (
      this.grids[4] &&
      !this.grids[5] &&
      this.grids[6] &&
      this.grids[7]
    ) {
      if (this.grids[6] == this.grids[7]) {
        this.grids[7] += this.grids[6];
        this.grids[6] = this.grids[4];
        this.grids[4] = 0;
      } else if (this.grids[6] != this.grids[7]) {
        if (this.grids[4] == this.grids[6]) {
          this.grids[6] += this.grids[4];
          this.grids[4] = 0;
        } else {
          this.grids[5] = this.grids[4];
          this.grids[4] = 0;
        }
      }
    }

    //if 1x1 & 2x1 & 3x1 & 4x1 is true
    else if (
      this.grids[4] &&
      this.grids[5] &&
      this.grids[6] &&
      this.grids[7]
    ) {
      if (this.grids[4] == this.grids[5] && this.grids[6] == this.grids[7]) {
        this.grids[7] += this.grids[6];
        this.grids[6] = this.grids[5] + this.grids[4];
        this.grids[5] = 0;
        this.grids[4] = 0;
      } else if (
        this.grids[4] == this.grids[5] &&
        this.grids[6] != this.grids[7]
      ) {
        if (this.grids[5] != this.grids[6]) {
          this.grids[5] += this.grids[4];
          this.grids[4] = 0;
        } else {
          this.grids[6] += this.grids[5];
          this.grids[5] = this.grids[4];
          this.grids[4] = 0;
        }
      } else if (
        this.grids[4] != this.grids[5] &&
        this.grids[6] == this.grids[7]
      ) {
        this.grids[7] += this.grids[6];
        this.grids[6] = this.grids[5];
        this.grids[5] = this.grids[4];
        this.grids[4] = 0;
      } else if (
        this.grids[4] != this.grids[5] &&
        this.grids[6] != this.grids[7] &&
        this.grids[5] == this.grids[6]
      ) {
        this.grids[6] += this.grids[5];
        this.grids[5] = this.grids[4];
        this.grids[4] = 0;
      }
    }
    // if 1x1 & 3x1 is true
    else if (
      this.grids[4] &&
      !this.grids[5] &&
      this.grids[6] &&
      !this.grids[7]
    ) {
      if (this.grids[4] == this.grids[6]) {
        this.grids[7] = this.grids[4] + this.grids[6];
        this.grids[6] = 0;
        this.grids[4] = 0;
      } else {
        this.grids[7] = this.grids[6];
        this.grids[6] = this.grids[4];
        this.grids[4] = 0;
      }
    }

    // if 1x1 & 2x1 & 3x1 is true
    else if (
      this.grids[4] &&
      this.grids[5] &&
      this.grids[6] &&
      !this.grids[7]
    ) {
      if (this.grids[6] == this.grids[5]) {
        this.grids[7] = this.grids[6] + this.grids[5];
        this.grids[6] = this.grids[4];
        this.grids[5] = 0;
        this.grids[4] = 0;
      } else if (this.grids[5] == this.grids[4]) {
        this.grids[7] = this.grids[6];
        this.grids[6] = this.grids[5] + this.grids[4];
        this.grids[5] = 0;
        this.grids[4] = 0;
      } else {
        this.grids[7] = this.grids[6];
        this.grids[6] = this.grids[5];
        this.grids[5] = this.grids[4];
        this.grids[4] = 0;
      }
    } else if (
      this.grids[4] &&
      this.grids[5] &&
      !this.grids[6] &&
      !this.grids[7]
    ) {
      if (this.grids[5] == this.grids[4]) {
        this.grids[7] = this.grids[5] + this.grids[4];
        this.grids[5] = 0;
        this.grids[4] = 0;
      } else {
        this.grids[7] = this.grids[5];
        this.grids[6] = this.grids[4];
        this.grids[5] = 0;
        this.grids[4] = 0;
      }
    } else if (
      this.grids[4] &&
      this.grids[5] &&
      !this.grids[6] &&
      this.grids[7]
    ) {
      if (this.grids[7] == this.grids[5]) {
        this.grids[7] += this.grids[5];
        this.grids[6] = this.grids[4];
        this.grids[5] = 0;
        this.grids[4] = 0;
      } else if (this.grids[4] == this.grids[5]) {
        this.grids[6] = this.grids[5] + this.grids[4];
        this.grids[5] = 0;
        this.grids[4] = 0;
      } else {
        this.grids[6] = this.grids[5];
        this.grids[5] = this.grids[4];
        this.grids[4] = 0;
      }
    }

    // =========================================== 1x1 is true =====================================Bottom
    // =========================================== 2x1 is true =====================================Head
    // if 2x1 is true
    else if (
      !this.grids[4] &&
      this.grids[5] &&
      !this.grids[6] &&
      !this.grids[7]
    ) {
      this.grids[7] = this.grids[5];
      this.grids[5] = 0;
    }
    // if 2x1 & 4x1 is true
    else if (
      !this.grids[4] &&
      this.grids[5] &&
      !this.grids[6] &&
      this.grids[7]
    ) {
      if (this.grids[5] == this.grids[7]) {
        this.grids[7] += this.grids[5];
        this.grids[5] = 0;
      } else {
        this.grids[6] = this.grids[5];
        this.grids[5] = 0;
      }
    }
    // if 2x1 & 3x1 & 4x1 is true
    else if (
      !this.grids[4] &&
      this.grids[5] &&
      this.grids[6] &&
      this.grids[7]
    ) {
      if (this.grids[7] == this.grids[6]) {
        this.grids[7] += this.grids[6];
        this.grids[6] = this.grids[5];
        this.grids[5] = 0;
      } else if (this.grids[5] == this.grids[6]) {
        this.grids[6] += this.grids[5];
        this.grids[5] = 0;
      }
    }
    //if 2x1 & 3x1 is true
    else if (
      !this.grids[4] &&
      this.grids[5] &&
      this.grids[6] &&
      !this.grids[7]
    ) {
      if (this.grids[5] == this.grids[6]) {
        this.grids[7] = this.grids[5] + this.grids[6];
        this.grids[5] = 0;
        this.grids[6] = 0;
      } else {
        this.grids[7] = this.grids[6];
        this.grids[6] = this.grids[5];
        this.grids[5] = 0;
      }
    }
    // =========================================== 2x1 is true =====================================Bottom
    // =========================================== 3x1 is true =====================================Head
    //if 3x1 is true
    else if (
      !this.grids[4] &&
      !this.grids[5] &&
      this.grids[6] &&
      !this.grids[7]
    ) {
      this.grids[7] = this.grids[6];
      this.grids[6] = 0;
    }
    // if 3x1 & 4x1 is true
    else if (
      !this.grids[4] &&
      !this.grids[5] &&
      this.grids[6] &&
      this.grids[7]
    ) {
      if (this.grids[7] == this.grids[6]) {
        this.grids[7] += this.grids[6];
        this.grids[6] = 0;
      }
    }
    // =========================================== 3x1 is true =====================================Bottom
    // ======================
    // =============================================
    // ======================
    // =========================================== 1x1 is true =====================================Head
    //if only 1x1 is true
    if (this.grids[0] && !this.grids[1] && !this.grids[2] && !this.grids[3]) {
      this.grids[3] = this.grids[0];
      this.grids[0] = 0;
    }
    //if 1x1 and 4x1 is true
    else if (
      this.grids[0] &&
      !this.grids[1] &&
      !this.grids[2] &&
      this.grids[3]
    ) {
      if (this.grids[0] == this.grids[3]) {
        this.grids[3] += this.grids[0];
        this.grids[0] = 0;
      } else {
        this.grids[2] = this.grids[0];
        this.grids[0] = 0;
      }
    }
    //if 1x1 & 3x1 & 4x1 is true
    else if (
      this.grids[0] &&
      !this.grids[1] &&
      this.grids[2] &&
      this.grids[3]
    ) {
      if (this.grids[2] == this.grids[3]) {
        this.grids[3] += this.grids[2];
        this.grids[2] = this.grids[0];
        this.grids[0] = 0;
      } else if (this.grids[2] != this.grids[3]) {
        if (this.grids[0] == this.grids[2]) {
          this.grids[2] += this.grids[0];
          this.grids[0] = 0;
        } else {
          this.grids[1] = this.grids[0];
          this.grids[0] = 0;
        }
      }
    } else if (
      this.grids[0] &&
      this.grids[1] &&
      !this.grids[2] &&
      this.grids[3]
    ) {
      if (this.grids[3] == this.grids[1]) {
        this.grids[3] += this.grids[1];
        this.grids[2] = this.grids[0];
        this.grids[1] = 0;
        this.grids[0] = 0;
      } else if (this.grids[0] == this.grids[1]) {
        this.grids[2] = this.grids[1] + this.grids[0];
        this.grids[1] = 0;
        this.grids[0] = 0;
      } else {
        this.grids[2] = this.grids[1];
        this.grids[1] = this.grids[0];
        this.grids[0] = 0;
      }
    }

    //if 1x1 & 2x1 & 3x1 & 4x1 is true
    else if (
      this.grids[0] &&
      this.grids[1] &&
      this.grids[2] &&
      this.grids[3]
    ) {
      if (this.grids[0] == this.grids[1] && this.grids[2] == this.grids[3]) {
        this.grids[3] += this.grids[2];
        this.grids[2] = this.grids[1] + this.grids[0];
        this.grids[1] = 0;
        this.grids[0] = 0;
      } else if (
        this.grids[0] == this.grids[1] &&
        this.grids[2] != this.grids[3]
      ) {
        if (this.grids[1] != this.grids[2]) {
          this.grids[1] += this.grids[0];
          this.grids[0] = 0;
        } else {
          this.grids[2] += this.grids[1];
          this.grids[1] = this.grids[0];
          this.grids[0] = 0;
        }
      } else if (
        this.grids[0] != this.grids[1] &&
        this.grids[2] == this.grids[3]
      ) {
        this.grids[3] += this.grids[2];
        this.grids[2] = this.grids[1];
        this.grids[1] = this.grids[0];
        this.grids[0] = 0;
      } else if (
        this.grids[0] != this.grids[1] &&
        this.grids[2] != this.grids[3] &&
        this.grids[1] == this.grids[2]
      ) {
        this.grids[2] += this.grids[1];
        this.grids[1] = this.grids[0];
        this.grids[0] = 0;
      }
    }
    // if 1x1 & 3x1 is true
    else if (
      this.grids[0] &&
      !this.grids[1] &&
      this.grids[2] &&
      !this.grids[3]
    ) {
      if (this.grids[0] == this.grids[2]) {
        this.grids[3] = this.grids[0] + this.grids[2];
        this.grids[2] = 0;
        this.grids[0] = 0;
      } else {
        this.grids[3] = this.grids[2];
        this.grids[2] = this.grids[0];
        this.grids[0] = 0;
      }
    }

    // if 1x1 & 2x1 & 3x1 is true
    else if (
      this.grids[0] &&
      this.grids[1] &&
      this.grids[2] &&
      !this.grids[3]
    ) {
      if (this.grids[2] == this.grids[1]) {
        this.grids[3] = this.grids[2] + this.grids[1];
        this.grids[2] = this.grids[0];
        this.grids[1] = 0;
        this.grids[0] = 0;
      } else if (this.grids[1] == this.grids[0]) {
        this.grids[3] = this.grids[2];
        this.grids[2] = this.grids[1] + this.grids[0];
        this.grids[1] = 0;
        this.grids[0] = 0;
      } else {
        this.grids[3] = this.grids[2];
        this.grids[2] = this.grids[1];
        this.grids[1] = this.grids[0];
        this.grids[0] = 0;
      }
    } else if (
      this.grids[0] &&
      this.grids[1] &&
      !this.grids[2] &&
      !this.grids[3]
    ) {
      if (this.grids[1] == this.grids[0]) {
        this.grids[3] = this.grids[1] + this.grids[0];
        this.grids[1] = 0;
        this.grids[0] = 0;
      } else {
        this.grids[3] = this.grids[1];
        this.grids[2] = this.grids[0];
        this.grids[1] = 0;
        this.grids[0] = 0;
      }
    } else if (
      this.grids[4] &&
      this.grids[5] &&
      !this.grids[6] &&
      this.grids[7]
    ) {
      if (this.grids[7] == this.grids[5]) {
        this.grids[7] += this.grids[5];
        this.grids[6] = this.grids[4];
        this.grids[5] = 0;
        this.grids[4] = 0;
      } else if (this.grids[4] == this.grids[5]) {
        this.grids[6] = this.grids[5] + this.grids[4];
        this.grids[5] = 0;
        this.grids[4] = 0;
      } else {
        this.grids[6] = this.grids[5];
        this.grids[5] = this.grids[4];
        this.grids[4] = 0;
      }
    }
    // =========================================== 1x1 is true =====================================Bottom
    // =========================================== 2x1 is true =====================================Head
    // if 2x1 is true
    else if (
      !this.grids[0] &&
      this.grids[1] &&
      !this.grids[2] &&
      !this.grids[3]
    ) {
      this.grids[3] = this.grids[1];
      this.grids[1] = 0;
    }
    // if 2x1 & 4x1 is true
    else if (
      !this.grids[0] &&
      this.grids[1] &&
      !this.grids[2] &&
      this.grids[3]
    ) {
      if (this.grids[1] == this.grids[3]) {
        this.grids[3] += this.grids[1];
        this.grids[1] = 0;
      } else {
        this.grids[2] = this.grids[1];
        this.grids[1] = 0;
      }
    }
    // if 2x1 & 3x1 & 4x1 is true
    else if (
      !this.grids[0] &&
      this.grids[1] &&
      this.grids[2] &&
      this.grids[3]
    ) {
      if (this.grids[3] == this.grids[2]) {
        this.grids[3] += this.grids[2];
        this.grids[2] = this.grids[1];
        this.grids[1] = 0;
      } else if (this.grids[1] == this.grids[2]) {
        this.grids[2] += this.grids[1];
        this.grids[1] = 0;
      }
    }
    //if 2x1 & 3x1 is true
    else if (
      !this.grids[0] &&
      this.grids[1] &&
      this.grids[2] &&
      !this.grids[3]
    ) {
      if (this.grids[1] == this.grids[2]) {
        this.grids[3] = this.grids[1] + this.grids[2];
        this.grids[1] = 0;
        this.grids[2] = 0;
      } else {
        this.grids[3] = this.grids[2];
        this.grids[2] = this.grids[1];
        this.grids[1] = 0;
      }
    }
    // =========================================== 2x1 is true =====================================Bottom
    // =========================================== 3x1 is true =====================================Head
    //if 3x1 is true
    else if (
      !this.grids[0] &&
      !this.grids[1] &&
      this.grids[2] &&
      !this.grids[3]
    ) {
      this.grids[3] = this.grids[2];
      this.grids[2] = 0;
    }
    // if 3x1 & 4x1 is true
    else if (
      !this.grids[0] &&
      !this.grids[1] &&
      this.grids[2] &&
      this.grids[3]
    ) {
      if (this.grids[3] == this.grids[2]) {
        this.grids[3] += this.grids[2];
        this.grids[2] = 0;
      }
    }
    // =========================================== 3x1 is true =====================================Bottom
  }

  
}
